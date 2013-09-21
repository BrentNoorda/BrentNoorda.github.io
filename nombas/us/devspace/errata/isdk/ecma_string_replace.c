   seconstcharptr
strstr_ecma_strings(seconstcharptr str,sememcount str_len,seconstcharptr find,sememcount find_len)
{
   seconstcharptr ret = NULL;
   if ( 0 != find_len )
   {
      if ( find_len <= str_len )
      {
         sememcount SearchSize = BYTECOUNT_FROM_STRLEN(find,find_len);
         sechar firstChar = SECHARPTR_GETC(find);
         sememcount search_count = str_len - find_len;
         do {
            if ( SECHARPTR_GETC(str) == firstChar
              && !memcmp((void *)str,(void *)find,SearchSize) )
            {
               ret = str;
               break;
            }
            SECHARPTR_INC(str);
         } while( search_count-- );
      }
   }
   return ret;
}

   static SE_CALLBACK(void)
Ecma_String_replace(secontext se, sememcount argc)
{
#  if defined(JSE_REGEXP_ANY)
   if ( seInstanceOf(se,SE_ARGS,SE_INDEX(0),SE_GLOBAL,SE_STOCK(RegExp)) )
      string_search_helper(se,argc,SE_REPLACE_MODE);
   else
#  endif
   {
      /* replace plain text string (no fancy regexp stuff) */
      seconstcharptr replace_text;        /* The text to be inserted as replacement. */
      seconstcharptr orig_text;           /* The original text string. */
      seconstcharptr to_replace_text;     /* The string which is to be replaced. */
      sememcount replace_len;             /* The length of replace_text when it's constructed. */
      sememcount orig_len;                /* The length of the original string. */
      sememcount to_replace_len;

      seconstcharptr place_holder;

      SE_UNUSED_PARAMETER(argc);

      orig_text = seGetString(se,SE_THIS,SE_VALUE,&orig_len);
      to_replace_text = seGetString(se,SE_ARGS,SE_INDEX(0),&to_replace_len);

      place_holder = strstr_ecma_strings( orig_text,orig_len, to_replace_text,to_replace_len );
      if( place_holder == NULL )
      {
         /* to_replace_text was not found anywhere in orig_text.  Return the this variable as
          * string jseVariable.
          */
         sePutString(se,SE_RETURN,SE_VALUE,orig_text,orig_len);
      }
      else
      {
         sememcount repl_loc;
         sememcount orig_bytelen, replace_bytelen, remainder_len, remainder_bytelen;
         seconstcharptr remainder;
         secharptr new_text;                 /* The final string w/replacements. */

         repl_loc = SECHARPTR_DIFF( place_holder, orig_text );
         if ( seIsFunc(se,SE_ARGS,SE_INDEX(1),NULL) )
         {
            seobject stack = seMakeStack(se);

            /* offset in string of match */
            sePutLong(se,stack,SE_INDEX(0),repl_loc);
            /* the string */
            sePutString(se,stack,SE_INDEX(1),orig_text,orig_len);

            /* call the function */
            seEval(se,seGetObject(se,SE_ARGS,SE_INDEX(1)),SE_FUNC,NULL,stack,SE_DEFAULT,NULL);

            replace_text = seGetString(se,SE_RETURN,SE_VALUE,&replace_len);
         }
         else
         {
            replace_text = seGetString(se,SE_ARGS,SE_INDEX(1),&replace_len);
         }

         /* allocate enough space for the return string plus a null terminator */
         orig_bytelen = (ubyte *)place_holder - (ubyte *)orig_text;
         replace_bytelen = BYTECOUNT_FROM_STRLEN(replace_text,replace_len);
         remainder = SECHARPTR_OFFSET( place_holder, to_replace_len );
         remainder_len = orig_len - repl_loc - to_replace_len;
         remainder_bytelen = BYTECOUNT_FROM_STRLEN(remainder, remainder_len )
                           + sizeof(secharptrdatum) /* we know this ends with the null-terminator we want */;

         new_text = (secharptr)seGCAllocEx(se, NULL, orig_bytelen + replace_bytelen + remainder_bytelen, 1, \
                                           NULL, SE_DEFAULT );
         if ( NULL != new_text )
         {
            memcpy( new_text, orig_text, orig_bytelen );
            memcpy( (ubyte *)new_text + orig_bytelen, replace_text, replace_bytelen );
            memcpy( (ubyte *)new_text + orig_bytelen + replace_bytelen, remainder, remainder_bytelen );
            sePutStringEx(se,SE_RETURN,SE_VALUE,SE_PS_USEPOINTER,new_text,(sememcount)(repl_loc+replace_len+remainder_len));
         }
      }
   }
}
