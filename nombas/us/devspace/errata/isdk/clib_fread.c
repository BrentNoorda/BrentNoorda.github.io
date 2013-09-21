static SE_CALLBACK(void)
Clib_fread(secontext se, sememcount argc)
{
   ubyte *Mem;
   FILE *fp;
   SE_POINTER_UINDEX DataLen;
   ulong ReadResult, retResult;
   struct seMemberDesc mem;
   sebool reading_buffer = ( SE_TYPE_NUMBER == seGetType(se,SE_ARGS,SE_INDEX(1)) );

   SE_UNUSED_PARAMETER(argc);

   fp = fileSystemFind_fp(CONTEXT_FILE_SYSTEM,se,SE_ARGS,SE_INDEX(2),NULL);
   if ( NULL == fp )
      return;
   seStoreMember(&mem,SE_INDEX(1));
   if ( !blobDataTypeLen(se,SE_ARGS,&mem,&DataLen))
      return;

   if ( 0 == DataLen )
   {
      sePutLong(se,SE_RETURN,SE_VALUE,0);
      return;
   }
   Mem = (ubyte *)seGCMalloc(se,(uint)DataLen);
   if( Mem==NULL ) return;
   
#  if JSE_STANDARD_SERVICES==1
   if( CONSOLEIO_CONTEXT != NULL && fileSystemIsConsoleFP(se,fp) )
      ReadResult = CONSOLEIO_CONTEXT->Read(se,(secharptr )Mem,DataLen);
   else
#  endif
      ReadResult = fread(Mem,1,DataLen,fp);
   /* read result is 1 or 0 except for reading buffer */
   retResult = ( reading_buffer )
             ? ReadResult
             : (ulong) (( ReadResult == DataLen ) ? 1 : 0);

   if ( retResult )
   {
      struct seMemberDesc first,second;
      seobject temp = seMakeObject(se);

      seStoreMember(&first,SE_INDEX(0));
      if ( reading_buffer )
      {
         temp = seMakeObject(se);
         seStoreMember(&second,SE_NUM(0));
         sePutLong(se,temp,SE_NUM(0),ReadResult);
      }
      else
      {
         temp = SE_ARGS;
         seStoreMember(&second,SE_INDEX(1));
      }
      blobGet(se,SE_ARGS,&first,Mem,temp,&second,blobBigEndianMode(se));
   }

   seGCFree(se,Mem);

   sePutLong(se,SE_RETURN,SE_VALUE,retResult);
}
