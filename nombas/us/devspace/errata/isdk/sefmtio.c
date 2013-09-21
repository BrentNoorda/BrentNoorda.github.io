/* sefmtio.c  Support functions for printf and scanf
 */

/*
 * (c) COPYRIGHT 1993-2003         NOMBAS, INC.
 *                                 65 TROWBRIDGE STREET
 *                                 ARLINGTON, MA 02474  USA
 *
 * ALL RIGHTS RESERVED
 *
 * This software is the property of Nombas, Inc. and is furnished under
 * license by Nombas, Inc.; this software may be used only in accordance
 * with the terms of said license.  This copyright notice may not be removed,
 * modified or obliterated without the prior written permission of Nombas, Inc.
 *
 * This software is a Trade Secret of Nombas, Inc.
 *
 * This software may not be copied, transmitted, provided to or otherwise made
 * available to any other person, company, corporation or other entity except
 * as specified in the terms of said license.
 *
 * No right, title, ownership or other interest in the software is hereby
 * granted or transferred.
 *
 * The information contained herein is subject to change without notice and
 * should not be construed as a commitment by Nombas, Inc.
 */

#define __ASSERT_FILENO__ 57

#include "jseopt.h"
#if defined(JSE_CLIB_ANY)
#  if defined(__JSE_MAC__) && !defined(__JSE_MAC_CARBON__)
#     include "src:lib:clib:seclib.h"
#  elif defined(__JSE_390__)
#     include "SECLIBH"
#  else
#     include "src/lib/clib/seclib.h"
#  endif
#endif

#if   defined(JSE_CLIB_PRINTF)    || \
      defined(JSE_CLIB_FPRINTF)   || \
      defined(JSE_CLIB_VPRINTF)   || \
      defined(JSE_CLIB_SPRINTF)   || \
      defined(JSE_CLIB_VSPRINTF)  || \
      defined(JSE_CLIB_RVSPRINTF) || \
      defined(JSE_CLIB_SYSTEM)    || \
      defined(JSE_CLIB_FSCANF)    || \
      defined(JSE_CLIB_VFSCANF)   || \
      defined(JSE_CLIB_SCANF)     || \
      defined(JSE_CLIB_VSCANF)    || \
      defined(JSE_CLIB_SSCANF)    || \
      defined(JSE_CLIB_VSSCANF)



#if defined(__hpux__) && JSE_FLOATING_POINT==1
   static sebool JSE_NEAR_CALL
fmtio_reverse_room_for_fp(struct FmtIO *fmtio)
{
   /* must get all floats to align on 8-byte boundaries, but working our way down.  The easiest
    * way (but not most memory-efficient) is just to first make sure this buffer is big enough to
    * hold everything that might double, and then work our way down shifting down any time we need to
    * align on an 8-byte boundary.
    */
   uword8 *new_alloc, *old_alloc;
   uword8 *old_ptr, *new_ptr;
   struct jse_List_ *list;
   sememcount arg;

   if ( 0 == fmtio->variableargs.C_List.VaListSize )
      return True;
   
   old_alloc = ((uword8 *)(fmtio->variableargs.C_List.VaList)) - fmtio->variableargs.C_List.VaListSize;

   new_alloc  = seGCMalloc(fmtio->se,fmtio->variableargs.C_List.VaListSize * 2);
   if ( NULL == new_alloc )
      return False;
      
   old_ptr = (uword8 *)(fmtio->variableargs.C_List.VaList);
   new_ptr = new_alloc + (fmtio->variableargs.C_List.VaListSize *= 2);
   fmtio->variableargs.C_List.VaList = (va_list)new_ptr;
   list = fmtio->variableargs.jse_List_Start;
   
   for ( arg = fmtio->variableargs.ArgCount; arg--; list = list->next )
   {
      old_ptr -= VLIST_CHUNK_SIZE;
      new_ptr -= VLIST_CHUNK_SIZE;
      if ( list->CType == variableargsCDouble )
      {
         old_ptr -= VLIST_CHUNK_SIZE;
         new_ptr -= VLIST_CHUNK_SIZE;
         if ( 0 != ((SE_POINTER_UINT)new_ptr % 8) )
            new_ptr -= VLIST_CHUNK_SIZE;
         SEASSERT( 0 == ((SE_POINTER_UINT)new_ptr % 8) );
         memcpy(new_ptr,old_ptr,sizeof(double));
      }
      else
      {
         *(uint *)new_ptr = *(uint *)old_ptr;
      }
   }

   SEASSERT( new_alloc <= new_ptr );      
   seGCFree(fmtio->se,old_alloc);
   return True;
}
#endif /* #if defined(__hpux__) && JSE_FLOATING_POINT==1 */

   static void
fmtioXGetNextVar(struct FmtIO *This,
                 seobject *obj,struct seMemberDesc *mem)
   /* If UseVaList then the args are sent as a va_list */
{
   secontext se = This->se;
   if( NULL == This->VList )
   {
      if( !seExists(se,SE_ARGS,SE_INDEX(This->NextFormatOffset)) )
         seThrow(se,textlibGetResource(se,textlibPRINTF_MISSING_PARAM));

      This->obj = SE_ARGS;
      seStoreMember(&(This->mem),SE_INDEX(This->NextFormatOffset));
      *obj = This->obj;
      *mem = This->mem;
   }
   else
   {
      variablearglistVar(se,This->VList,This->NextFormatOffset,obj,mem);
   }
   This->NextFormatOffset++;
}

   static void JSE_NEAR_CALL
fmtioInit(struct FmtIO *This,secontext se,sememcount FormatOffset,
          sebool UseVaList,sebool *Success)
{
   *Success = False;

   if ( variableargsInit(&(This->variableargs),se) )
   {
      SE_POINTER_UINDEX str_len;

      This->pFormat = NULL; /* in case of error */

      This->se = se;

      This->InitialFormatString = (secharptr) seGetString(se,SE_ARGS,SE_INDEX(FormatOffset),
                                                          &str_len);

      /* The format string may change to meet the underlying compiler's version of
       * the printf format string.  I can't really think of a case when it would get
       * twice as big, but it certainly cannot get more than twice as big, so allocate
       * twice as big.
       */
      This->pFormat = (secharptr)seGCMalloc(se,sizeof(sechar)*
                                    (1+(2*strlen_sechar(This->InitialFormatString))));
      if( This->pFormat!=NULL )
      {
         /* determine if arguments are to be taken off the stack or off a va_list */
         if ( UseVaList )
         {
            This->VList = variablearglistGetArgList(se,SE_ARGS,SE_INDEX((sememcount)
                                                                        (FormatOffset+1)),True);
            if( This->VList != NULL )
               *Success = True;

            This->NextFormatOffset = 0;
         }
         else
         {
            *Success = True;
            This->VList = NULL;
            This->NextFormatOffset = FormatOffset + 1;
         }
      }
   }
}

   void NEAR_CALL
fmtioTerm(struct FmtIO *This)
   /* free format string for use in vprintf, vfprintf, or vsprintf */
{
   variableargsTerm(&(This->variableargs));
   if ( NULL != This->pFormat )
   {
      seGCFree(This->se,This->pFormat);
   }
}

#endif /* fmtio */

#if   defined(JSE_CLIB_PRINTF)    || \
      defined(JSE_CLIB_FPRINTF)   || \
      defined(JSE_CLIB_VPRINTF)   || \
      defined(JSE_CLIB_SPRINTF)   || \
      defined(JSE_CLIB_VSPRINTF)  || \
      defined(JSE_CLIB_RVSPRINTF) || \
      defined(JSE_CLIB_SYSTEM)

   void NEAR_CALL
xprintfInit(struct xPrintF *This,secontext se,sememcount FormatOffset,sebool UseVaList,
            sebool *Success)
{
   secharptr fmt;
   secharptr InitFormat;
   sechar save;
   seobject NextObj;
   struct seMemberDesc NextMem;

   fmtioInit(&(This->fmtio),se,FormatOffset,UseVaList,Success);
   if ( !(*Success))
      return;
   *Success = False;
   InitFormat = (secharptr)This->fmtio.InitialFormatString;

   /* start with the format string itself. */
   This->space_needed = 1 + strlen_sechar(InitFormat);

   /* retrieve arguments, and create real vlist, one by one */
   for ( fmt = This->fmtio.pFormat; ;
         SECHARPTR_INC(InitFormat), SECHARPTR_INC(fmt) )
   {
      size_t to_add = 0;
      size_t try_this = 0;

      sechar c = SECHARPTR_GETC(InitFormat);
      SECHARPTR_PUTC(fmt,c);
      if ( 0 == c )
        break;

      if ( UNICHR('%') == SECHARPTR_GETC(fmt) )
      {
         SECHARPTR_INC(InitFormat);
         SECHARPTR_INC(fmt);

         SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
         if ( UNICHR('%') != SECHARPTR_GETC(fmt))
         {
            /* skip flags */
            while( NULL != strchr_sechar(UNISTR("+- #"),SECHARPTR_GETC(fmt)))
            {
               SECHARPTR_INC(fmt);
               SECHARPTR_INC(InitFormat);
               SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
            }
            /* skip width */
            if ( UNICHR('*') == SECHARPTR_GETC(fmt) )
            {
               fmtioXGetNextVar(&(This->fmtio),&NextObj,&NextMem);
               try_this = (size_t) seGetLong(se,NextObj,SE_STRUCT(&NextMem));
               if( try_this>to_add ) to_add = try_this;
               if ( !variableargsArg(&(This->fmtio.variableargs),&NextObj,&NextMem,
                                     variableargsArgPut,variableargsCInt,0) )
                  return;
               SECHARPTR_INC(fmt);
               SECHARPTR_INC(InitFormat);
               SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
            }
            else
            {
               try_this = (size_t) atoi_sechar(InitFormat);
               if( try_this>to_add ) to_add = try_this;
               while( isdigit_sechar(SECHARPTR_GETC(fmt)))
               {
                  SECHARPTR_INC(fmt);
                  SECHARPTR_INC(InitFormat);
                  SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
               }
            } /* endif */
              /* skip precision */
            if ( UNICHR('.') == SECHARPTR_GETC(fmt) )
            {
               SECHARPTR_INC(fmt);
               SECHARPTR_INC(InitFormat);
               SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
               if ( UNICHR('*') == SECHARPTR_GETC(fmt) )
               {
                  /* asterisk shows that a width is supplied on the stack */
                  fmtioXGetNextVar(&(This->fmtio),&NextObj,&NextMem);
                  try_this = (size_t) seGetLong(se,NextObj,SE_STRUCT(&NextMem));
                  if( try_this>to_add ) to_add = try_this;
                  if ( !variableargsArg(&(This->fmtio.variableargs),&NextObj,&NextMem,
                                        variableargsArgPut,variableargsCInt,0) )
                     return;
                  SECHARPTR_INC(fmt);
                  SECHARPTR_INC(InitFormat);
                  SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
               }
               else
               {
                  try_this = (size_t) atoi_sechar(InitFormat);
                  if( try_this>to_add ) to_add = try_this;
                  while( isdigit_sechar(SECHARPTR_GETC(fmt)))
                  {
                     SECHARPTR_INC(fmt);
                     SECHARPTR_INC(InitFormat);
                     SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
                  }
               } /* endif */
            } /* endif */
            switch ( SECHARPTR_GETC(fmt) )
            {
               case 'd': case 'i': case 'o': case 'u': case 'x': case 'X':
                  /* must add l to variable to make it longer */
                  save = SECHARPTR_GETC(fmt);
                  SECHARPTR_PUTC(fmt,UNICHR('l'));
                  SECHARPTR_INC(fmt);
                  SECHARPTR_PUTC(fmt,save);
                  fmtioXGetNextVar(&(This->fmtio),&NextObj,&NextMem);
                  if ( !variableargsArg(&(This->fmtio.variableargs),&NextObj,&NextMem,
                                        variableargsArgPut,variableargsCLong,0) )
                     return;
                  try_this = 20; /* should be PLENTY */
                  break;
#              if JSE_FLOATING_POINT==1
               case 'f': case 'e': case 'g': case 'E': case 'G':
                                 /* must add l to variable to make it double */
                  fmtioXGetNextVar(&(This->fmtio),&NextObj,&NextMem);
                  if ( !variableargsArg(&(This->fmtio.variableargs),
                                        &NextObj,&NextMem,variableargsArgPut,
                                        variableargsCDouble,0) )
                     return;
                  try_this = 300; /* should be plenty */
                  break;
#              endif
               case 'c':
                  {
                     sechar temp;
                     fmtioXGetNextVar(&(This->fmtio),&NextObj,&NextMem);

                     if ( !GetSecharFromStringOrNumber(se,NextObj,&NextMem,&temp) )
                     {
                        return;
                     }
                     if ( !variableargsArg(&(This->fmtio.variableargs),&NextObj,&NextMem,
                                           variableargsArgPut,variableargsCByte,0) )
                        return;
                     try_this = 1;
                  }
                  break;
               case 's':
                  {
                     SE_POINTER_UINDEX str_len;
                     seconstcharptr tmpstr;
                     fmtioXGetNextVar(&(This->fmtio),&NextObj,&NextMem);

                     tmpstr = seGetString(se,NextObj,SE_STRUCT(&NextMem),&str_len);
                     try_this = sizeof(sechar) * strlen_sechar(tmpstr);
                     seFreeString(se,tmpstr);

                     if ( !variableargsArg(&(This->fmtio.variableargs),&NextObj,&NextMem,
                                           variableargsArgPut,variableargsCString,0) )
                        return;
                  }
                  break;
               default:
                  seThrow(se,textlibGetResource(se,textlibUNKNOWN_FORMAT_SPECIFIER),SECHARPTR_GETC(fmt));
                  return;
            } /* endswitch */
         } /* endif */
      } /* endif */

      /* for each field, we add extra space to the maximum needed. It is the
       * largest of the width, precision, or space for the parameter itself.
       */

      if( try_this>to_add ) to_add = try_this;
      This->space_needed += to_add;
   } /* endfor */
   *Success = True;
#  if defined(__hpux__) && JSE_FLOATING_POINT==1
      if ( !fmtio_reverse_room_for_fp( &(This->fmtio) ) )
         *Success = False;
#  endif         
   return;
}

#endif /* xprintf */

#if   defined(JSE_CLIB_FSCANF)    || \
      defined(JSE_CLIB_VFSCANF)   || \
      defined(JSE_CLIB_SCANF)     || \
      defined(JSE_CLIB_VSCANF)    || \
      defined(JSE_CLIB_SSCANF)    || \
      defined(JSE_CLIB_VSSCANF)

   void
xscanfInit(struct xScanF *This,secontext se,sememcount FormatOffset,
           sebool UseVaList,sebool *Success)
{
   secharptr InitFormat;
   secharptr fmt;
   sechar save;

   fmtioInit(&(This->fmtio),se,FormatOffset,UseVaList,Success);
   if ( !(*Success))
      return;
   *Success = False;
#  define  DEFAULT_STRING_LEN   1000
   InitFormat = (secharptr)This->fmtio.InitialFormatString;
   /* retrieve arguments, and create real vlist, one by one */
   for ( fmt = This->fmtio.pFormat; ;
         SECHARPTR_INC(InitFormat), SECHARPTR_INC(fmt) )
   {
      sechar c = SECHARPTR_GETC(InitFormat);
      SECHARPTR_PUTC(fmt,c);
      if ( 0 == c )
         break;

      if ( UNICHR('%') == SECHARPTR_GETC(fmt) )
      {
         SECHARPTR_INC(InitFormat);
         SECHARPTR_INC(fmt);
         SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
         if ( UNICHR('%') != SECHARPTR_GETC(fmt))
         {
            uint width = 0;
            sebool WidthSpecified;
            /* check for suppress-assignment character */
            sebool SuppressAssignment = (UNICHR('*') == SECHARPTR_GETC(fmt));

            seobject obj;
            struct seMemberDesc mem;

            if ( SuppressAssignment )
            {
               SECHARPTR_INC(fmt);
               SECHARPTR_INC(InitFormat);
               SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
            }
            else
            {
               fmtioXGetNextVar(&(This->fmtio),&obj,&mem);
            } /* endif */
              /* skip width, especially for strings */
            if ( isdigit_sechar(SECHARPTR_GETC(fmt) ))
            {
               WidthSpecified = True;
               width = 0;
               do
               {
                  width = (10*width) + (SECHARPTR_GETC(fmt) - '0');
                  SECHARPTR_INC(InitFormat);
                  SECHARPTR_INC(fmt);
                  SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));
               } while ( isdigit_sechar(SECHARPTR_GETC(fmt))); /* enddo */
               if ( 0 == width )
               {
                  seThrow(se,textlibGetResource(se,textlibZERO_WIDTH_IS_INVALID));
                  return;
               } /* endif */
            }
            else
            {
               WidthSpecified = False;
            } /* endif */
              /* finally check on the type_character */
            switch ( tolower_sechar(SECHARPTR_GETC(fmt)))
            {
               case 'd':
               case 'o':
               case 'i':
               case 'u':
               case 'x':
                  /* integer types must be made into longs */
                  save = SECHARPTR_GETC(fmt);
                  SECHARPTR_PUTC(fmt,UNICHR('l'));
                  SECHARPTR_INC(fmt);
                  SECHARPTR_PUTC(fmt,save);
                  if ( !SuppressAssignment )
                  {
                     if ( !variableargsArg(&(This->fmtio.variableargs),&obj,&mem,
                                           variableargsArgGet,variableargsCLong,0) )
                        return;
                  } /* endif */
                  break;
#              if JSE_FLOATING_POINT==1
               case 'e':
               case 'f':
               case 'g':
                    /* float types must be made into doubles */
                  save = SECHARPTR_GETC(fmt);
                  SECHARPTR_PUTC(fmt,UNICHR('l'));
                  SECHARPTR_INC(fmt);
                  SECHARPTR_PUTC(fmt,save);
                  if ( !SuppressAssignment )
                  {
                     if ( !variableargsArg(&(This->fmtio.variableargs),&obj,&mem,
                                           variableargsArgGet,variableargsCDouble,0) )
                        return;
                  } /* endif */
                  break;
#              endif
               case 'c':
                  if ( !SuppressAssignment )
                  {
                     {
                        if ( !variableargsArg(&(This->fmtio.variableargs),&obj,&mem,
                                              variableargsArgGet,
                                              variableargsCByte,0) )
                           return;
                     } /* endif */
                  } /* endif */
                  break;
               case '[':
                  do
                  {
                     SECHARPTR_INC(InitFormat);
                     SECHARPTR_INC(fmt);
                     SECHARPTR_PUTC(fmt,SECHARPTR_GETC(InitFormat));

                     if ( 0 == SECHARPTR_GETC(fmt))
                     {
                        seThrow(se,textlibGetResource(se,textlibSCANF_BRACKET_NOT_FOUND));
                        return;
                     }                     /* endif */
                  } while ( ']' != SECHARPTR_GETC(fmt) ); /* enddo */
               case 's':
                  if ( !SuppressAssignment )
                  {
                     if ( !variableargsArg(&(This->fmtio.variableargs),&obj,&mem,
                                           variableargsArgGet,variableargsCString,
                                           WidthSpecified ? width : DEFAULT_STRING_LEN) )
                        return;
                  } /* endif */
                  break;
               default:
                  seThrow(se,textlibGetResource(se,textlibSCANF_TYPE_UNKNOWN),
                          SECHARPTR_GETC(fmt));
                  return;
            } /* endswitch */

         } /* endif */
      } /* endif */
   } /* endfor */
   *Success = True;
   return;
}

#endif /* xscanf */

ALLOW_EMPTY_FILE
