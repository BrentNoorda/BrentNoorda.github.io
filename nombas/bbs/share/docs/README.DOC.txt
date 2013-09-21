                         CEnvi Demo - ReadMe
                   
                           CEnvi version 2.11
                            20 February 1996

                 Copyright 1993, Nombas, All Rights Reserved.
          Published by Nombas, 64 Salem Street, MEDFORD MA 02155 USA
          
             VOICE (617) 391-6595     EMAIL: nombas@nombas.com
             BBS   (617) 391-3718     WWW: http://www.nombas.com
             FAX   (617) 391-3842

         Thank you for trying this shareware version of CEnvi from Nombas.

                          _______
                     ____|__     |                (R)
                  --|       |    |-------------------
                    |   ____|__  |  Association of
                    |  |       |_|  Shareware
                    |__|   o   |    Professionals
                  -----|   |   |---------------------
                       |___|___|    MEMBER


Introduction to Cmm and CEnvi

     Cmm: Cmm (C minus minus) is a scripting (i.e. programming)
          language.  Cmm is 'C' for the rest of us; i.e., C minus the
          hard stuff. Cmm packs the functionality of C, but eliminates
          C's complex, time consuming, and hazardous data manipulations.
          Cmm is immediately familiar and immediately useful to hundreds
          of thousands of professional C programmers. At the same time,
          Cmm is also easy to learn and use for people who have never
          programmed.

          Cmm extends the power of C down to the macro language domain.
          Nowhere will you find a more straight forward syntax, fewer
          keywords, and such simple, well-defined rules as in the Cmm
          language. Three features -- power, safety, and simplicity --
          make the Cmm Toolkit the perfect fit for scripting and macro
          usage.

          Cmm strengths
           * Easy to learn for new programmers
           * Safe (Hard to make dangerous beginner mistakes)
           * Intuitive to professional C/C++ developers
           * Natural extension of the C/C++ programming languages

   CEnvi: CEnvi is a standalone interpreter for the Cmm scripting
          language--a powerful and versatile cross-platform macro language
          interpreter.  CEnvi gives you a full strength computer language,
          but without the time, system, and resource programming hassles
          normally associated with developing computer programs.

          Whether you are a professional programmer, systems administrator,
          experienced user, or just a novice, you can unleash the power of
          your PC with CEnvi.  CEnvi can be incorporated at a pace that is
          comfortable to you: you may only want to use CEnvi code set up by
          a more experienced user, you may want to enhance existing batch
          files with a line or two of CEnvi code, or you may want to write
          complete utilities using CEnvi.

          CEnvi s automation development tools enable you to create robust
          utilities, quickly build programs, and easily automate tasks so
          you can work more productively and efficiently.

          CEnvi's advantages
           * Easy to use
           * Powerful - Allows for direct system and DLL calls
           * Provides a Windows command line and programming interface
           * Data Exchange through DDE, clipboard, shared memory and pipes
           * Low memory and Disk usage
           * Event Scheduling and Monitoring
           * Enhances Existing batch and REXX utilities

          Who benefits from CEnvi
           * Programming Professionals
           * Network and System Administrators
           * The home or business PC user

          To learn how to write scripts in the Cmm language, new programmers
          should consult Chapter 2, "The Cmm Language", and Chapter 3,
          "Tutorial - CmmEdit a Simple Editor".  Current C programmers
          should consult Chapter 4, "Cmm vs. C", on the differences between
          C and Cmm. 

What they said about CEnvi version 1.009

          "Every now and then a programming tool serves a particular need
           better than anything else.  CEnvi, a shareware product from
           Nombas, is such a tool. ...CEnvi has virtually replaced ReXX
           and the DOS batch language in my office."
                      Al Stevens, Dr.Dobb's, December '94

          "Concise documentation, an extensive code library, over 70
           examples, and compact executable size make CEnvi a good choice
           for writing small programs and Windows scripts." <four stars>
                     Ziff-Davis Interactive

          "...if you are a C programmer, this product is really a dream
           come true."
                      Brian Proffit, OS/2 Magazine January '94

... and awarded to CEnvi version 2.00

          1995 Ziff-Davis Shareware Awards - Winner of PC Magazine 
          Shareware-of-the-Year award for Programming Tools

New Features in Version 2.10

   CEnvi versions have been added for Windows NT--console and GUI
   mode.  Full clipboard support for Windows and Windows NT version.
   This includes marking, copying, and pasting from/to the CEnvi screen.
   The CEnvi shell has been greatly enhanced in all versions--including
   launching applications with environment-variable inheritance, file
   redirection and piping, alias, history, and many internal commands.
   New "literal strings" protect text from overwriting.

New Features for Version 2.11

   Windows 95 support, including OLE Automation. The shell has been
   greatly enhanced, many bugs have been squashed and wishes fulfilled.

-------------------------- Quick Start For DOS -----------------------------

          Create a directory to install CEnvi for DOS in (we recommend
          CENVIDOS). UNZIP cenvidos.zip into the directory you created. CEnvi 
          for DOS includes two executables. CEnvid.exe is a regular DOS
          program. CEnvid32.exe is a 32 bit DOS version. It is useful if you
          find that the regular DOS version of CEnvi is running out of
          memory.
          
          The first time you run CEnvi for DOS, run the install.cmm 
          installation script. The installation script does 2 things for you.
          It creates a CMMPATH environment variable, adds the CEnvi for DOS
          path to the DOS PATH.
          
          After CEnvi for DOS is installed, try the following sample
          utilities. They best demonstrate the power of CEnvi for DOS.
          Samples that end in .bat can be run as batch files. Samples that
          end in .CMM require typing "cenvid sample.cmm" where sample is the 
          name of the utility.

          NOTE: CEnvi for DOS can directly alter DOS environment variables.
          For example, from the DOS command line enter the commands:
             SET COUNT=100
             CEnviD COUNT = COUNT + 2
             SET
          and you'll see that CEnvi has increased the COUNT environment
          variable to 102.  Because CEnvi uses environment space, you
          may sometimes see an error message such as:
             "The environment is not big enough..."
          To correct this problem, you can specify a larger environment
          size with a command such as:
             COMMAND.COM /E:2000
          To make this change permanent, add the /E:XXXX parameter,
          where XXXX is a new environment size, to the "SHELL="
          line in CONFIG.SYS.
          
   DOS Quick-Start Sample Files

            *EnviAsks.bat: Many examples of user input using EnviAsk.bat
                           and GetUKey.cmm
            *EnvSort.bat:  Sort environment variables alphabetically
            *FileFind.bat: Wildcard search for files on current drive or on
                           all drives
            *GetUKey.cmm:  Display a choice prompt and then set an
                           environment variable based on user's selection
            *KbdBuf.bat:   Alter the size of the keyboard buffer
            *KeyState.bat: Get or set the state of the NumLock, CapsLock,
                           or Insert keys
            *Mouse.bat:    Demonstrate reading a mouse's position and state
            *PathAdd.bat:  Add a directory to your PATH environment
                           variable.
            *PathDel.bat:  Remove a directory from your PATH environment
                           variable
            *RunTime.bat:  Rudimentary scheme for executing a command at a
                           certain time of day.
            *Sound.bat:    Play a frequency for a given time period
            *WinClip.cmm:  Utility to access Windows clipboard from DOS

          
------------------------- Quick Start For Windows --------------------------

          Create a directory to install CEnvi for Windows in (we recommend
          CENVIWIN). UNZIP cenviwin.zip into the directory you created. CEnvi 
          for Windows includes two executables. CEnviw.exe is a Windows
          program that is both a Cmm interpreter and a Windows Command line
          and servewin.com allows windows to control DOS sessions.
                    
          When you run CEnvi for Windows from program manager, it will provide 
          a command-line interface (complete with shell commands you expect,
          such as DIR, MKDIR, etc., and ability to call any program from the
          shell or START executables). Type install, and the installation
          script will set up CEnvi for Windows Properly. It will create a
          CEnvi program group containing CEnvi for Windows, and a few sample
          Cmm utilities.
          
          After CEnvi for Windows is installed, try the following sample
          utilities. They best demonstrate the power of CEnvi for Windows.
          All of these utilities can be run directly from the CEnvi for
          Windows command line prompt. Some are shown as icons in the CEnvi
          program group, double click to run them. All these samples may be
          viewed using a standard text editor such as notepad.
          
   Windows Quick-Start Sample Files

            *BmpView.cmm:  Demonstrate the BMP.LIB routines by reading any
                           number of .BMP files and displaying them.
                           To run this program, type bmpview at the CEnvi 
                           shell prompt.
            *Dropper.cmm:  Perform command for all files Drag-&-Dropped to
                           this tool.
            *ExitWin.cmm:  Exit Windows; options to save files, force
                           applications to quit, restart Windows, and
                           reboot computer. To run this program, type exitwin
                           at the CEnvi shell prompt.
            *InputBox.cmm: Demonstrate uses of the InputBox() routine in
                           InputBox.lib. To run this program, type inputbox
                           at the CEnvi shell prompt.
            *KeyGhost.cmm: Demonstrate how to use KeyPush.lib to control
                           other applications. To run this program, type 
                           keyghost at the CEnvi shell prompt.
            *MenuNot.cmm:  Disable or delete a menu item. To run this program,
                           type menunot at the CEnvi shell prompt.
            *MsgBoxes.cmm: Show various message box types using the
                           function in MsgBox.lib. To run this program, type
                           msgboxes at the CEnvi shell prompt.
            *Pm_exits.cmm: Adds Restart Windows and Reboot to Program manager.
                           Meant to display adding menu selections to other 
                           applications. To run this program, type pm_exits
                           at the CEnvi shell prompt. To add this utility all
                           the time, add an item to the startup group and set
                           its command line to "CENVIW pm_exits.cmm".
            *PMButt.cmm:   Replace Program Manager with a tiny button in
                           upper-left corner for access to all PM items. To
                           run this program, type pmbutt at the CEnvi
                           shell prompt.
            *PongTime.cmm: Bounce the Windows clock mini-app around. To run 
                           this program, type pongtime at the CEnvi shell
                           prompt.
            *WinTools.cmm: Demonstrate many of the capabilities of
                           WinTools.lib. To run this program, type wintools
                           at the CEnvi shell prompt.

          
----------------------- Quick Start For OS/2 -------------------------------

          Create a directory to install CEnvi for OS/2 in (we recommend
          CENVIOS2). UNZIP cenviOS2.zip into the directory you created. CEnvi 
          for OS/2 includes two executables. CEnvi2.exe is a OS/2 program.
          CEnvi2PM.exe is used by CEnvi2.exe to make presentation manager
          calls. It must be in the current directory or in the search 
          path for many of the Os/2 samples to work correctly.
                    
          The first time you run CEnvi for OS/2, run "install.cmm" from the Cmm
          installation script. The installation script will set up CEnvi for
          OS/2 Properly.
                    
          After CEnvi for OS/2 is installed, try the following sample
          utilities. They best demonstrate the power of CEnvi for OS/2.
          
   OS/2 Quick-Start Sample Files

            *Bouncy.cmd:   Start a bouncy OS/2 Command Window. This
                           demonstrates moving windows and silliness.
            *ClipBrd.cmd:  Get or modify clipboard text
            *DoFiles.cmd:  Perform any command on a list of files selected
                           from a file dialog box
            *DoMenu.cmd:   Execute any menu selection of a PM application,
                           based on the name of the window and the menu text
            *DOS.cmd:      Perform DOS command from an OS/2 session, with the
                           option to "see" output of the command; mirrors 
                           OS2.BAT
            *KeyGhost.cmd: Sample for using KeyPush.lib to determine if
                           CEnvi is worth the price of registration.
            *MsgBoxes.cmd: Show various message box types using the
                           function in MsgBox.lib.
            *NumLock.cmd:  Turn on NUMLOCK key once, or maintain NUMLOCK ON.
                           A shadow of NumLock.cmd can be put in startup
                           folder to default computer to NumLock ON. 
                           "NumLock 1000" will check every second to make
                           sure that NUMLOCK is still set.
            *ObjSet.cmd:   Alter WPS object and folder settings.  Run
                           OBJSET MANUAL for complete description.
            *OnTop.cmd:    Float window to top of all other windows
            *OS2.bat:      Perform OS/2 command from a DOS session, with the
                           option to "see" output of the command; mirrors 
                           DOS.CMD.  Note that this requires CEnvi for DOS
            *Session.cmd:  Replace OS/2's START command for greater control
                           of starting sessions, including name, position,
                           font, notebook settings, etc...
            *Sessions.cmd: batch file to demonstrate various uses of
                           Session.cmd
            *ShutDown.cmd: Automated shutdown or reboot of OS/2 system,
                           including options to save desktop settings or
                           force shutdown/reboot with other programs running.
            *TextWin.cmd:  GET/PUT text from/to a windowed DOS or OS/2
                           session
            *WinSet.cmd:   Set the position, size, state, etc... of a PM
                           Window
            *WinTools.cmd: Demonstrate many of the capabilities of
                           WinTools.lib.  This is a fun one!
          

--------------------- Quick Start For Windows/NT --------------------------

          CEnvi for Windows NT includes two executables: CEnviNT.exe is a
          console (text-mode) application for running CEnvi scripts from
          the default NT command line, or CEnvi scripts embedded within
          batch files.  CEnviWNT.exe is a GUI application that operates as
          a Cmm command-line shell, can execute Cmm scripts associated
          with .cmm files, and provides more access than the console version
          to the creation of windows within Windows NT.

          When you run either version of CEnvi for Windows from program
          manager the first time, it will run the Cmm installation script
          for that version, INSTALL.CMM. This will set up CEnvi for Windows
          Properly. (You may execute the INSTALL utility again at any time,
          from either version, by entering the command "INSTALL" at the CEnvi
          command shell prompt.)

          For the console version (CEnviNT.exe), INSTALL.CMM will add the
          CMMPATH to your environment group, and add the CEnvi path to the
          PATH environment variable.

          For the GUI version (CEnviWNT.exe), INSTALL.CMM will update the
          registry to locate CEnviWNT and the Cmm files and libraries in the
          CMMPATH registered location, and the registry will also be updated
          to associate files with the .cmm extension to CEnviWNT.EXE so they
          can be automatically launched from File Manager.

          After CEnvi for Windows NT is installed, try the following sample
          utilities. They best demonstrate the power of CEnvi for Windows NT.
          All of these utilities can be run directly from the CEnvi for
          windows command line prompt.  Some are shown as icons in the CEnvi
          program group, double click to run them.  All of these samples may
          be viewed using a standard text editor such as notepad.

    Windows NT Quick Start Sample Files

            *BmpView.cmm	Demonstrate the BMP.LIB routines by reading any
                           number of .BMP files and displaying them. To run
                           this program, type bmpview at the CEnvi shell
                           prompt.
            *Dropper.cmm	Perform command for all files Drag-&-Dropped to
                           this tool. 
            *InputBox.cmm	Demonstrate uses of the InputBox() routine in
                           InputBox.lib. To run this program, type INPUTBOX
                           at the CEnvi shell prompt.
            *KeyGhost.cmm	Demonstrate how to use KeyPush.lib to control
                           other applications. To run this program, type
                           KEYGHOST at the CEnvi shell prompt.
            *MenuNot.cmm	Disable or delete a menu item. To run this
                           program, type MENUNOT at the CEnvi shell prompt.
            *MsgBoxes.cmm	Show various message box types using the function
                           in MsgBox.lib. To run this program, type msgboxes
                           at the CEnvi shell prompt.
            *PMButt.cmm	   Replace Program Manager with a tiny button in
                           upper-left corner for access to all PM items. To
                           run this program, type PMBUTT at the CEnvi shell
                           prompt.
            *PongTime.cmm	Bounce the Windows clock mini-app around. To run
                           this program, type PONGTIME at the CEnvi shell
                           prompt.
            *Reboot.cmm	   Automate Program Manager File/Exit and dialog box
                           to reboot system from command-line or CEnvi script.
            *WinTools.cmm	Demonstrate many of the capabilities of
                           WinTools.lib. To run this program, type WINTOOLS at
                           the CEnvi shell prompt.


----------------------------- FILE LIST -----------------------------------

The CEnvi Unregistered Shareware package includes all the files
in the following lists.  You are not permitted to upload or otherwise transfer
copies of any unregistered version of CEnvi that do not include all of the
files in these lists. If you want to upload a CEnvi sharware version to a
BBS, you may consider calling the Nombas BBS to download the latest shareware
zip files.

--------------- CENVIW.zip Contains the following files -------------------

CENVIW.EXE:   CEnvi shareware executable for Windows
SERVEWIN.COM: Allows CEnvi for Windows to control DOS Boxes
CENVI.DOC:    CEnvi Shareware Manual, Chapter 1: CEnvi Unregistered Shareware
CMMTUTOR.DOC: CEnvi Shareware Manual, Chapter 2: Cmm Language Tutorial
CMM_VS_C.DOC: CEnvi Shareware Manual, Chapter 3: Cmm versus C, for C
              Programmers
CENVILIB.DOC: CEnvi Shareware Manual, Chapter 4: Function Library
LICENSE.DOC:  CEnvi Unregistered Shareware License Agreement
README.DOC:   Introductory file. Read this first for quick intallation.
REGISTER.DOC: CEnvi registration form
INSTALL.CMM:  Cmm source file for installing this shareware version

*.CMM, *.CMD, *.BAT, *.LIB: Many sample programs using CEnvi for Windows.
  See CENVI.DOC for a complete list.

----------------- CENVID.zip Contains the following files -----------------

CENVID.EXE:   CEnvi shareware executable for DOS
CENVID32.EXE: CEnvi shareware 32 Bit executable for DOS
CMMTUTOR.DOC: CEnvi Shareware Manual, Chapter 2: Cmm Language Tutorial
CMM_VS_C.DOC: CEnvi Shareware Manual, Chapter 3: Cmm versus C, for C
              Programmers
CENVILIB.DOC: CEnvi Shareware Manual, Chapter 4: Function Library
LICENSE.DOC:  CEnvi Unregistered Shareware License Agreement
README.DOC:   Introductory file. Read this first for quick intallation.
REGISTER.DOC: CEnvi registration form
INSTALL.CMM:  Cmm source file for installing this shareware version

*.CMM, *.CMD, *.BAT, *.LIB: Many sample programs using CEnvi for DOS.
  See CENVI.DOC for a complete list.


------------------CENVI2.zip Contains the following files -----------------

CENVI2.EXE:   CEnvi shareware executable for OS/2
CENVI2PM.EXE: Gateway program, executed transparently by CEnvi, for access
              to PM-dependent system calls (OS/2 version only).
CENVI.DOC:    CEnvi Shareware Manual, Chapter 1: CEnvi Unregistered Shareware
CMMTUTOR.DOC: CEnvi Shareware Manual, Chapter 2: Cmm Language Tutorial
CMM_VS_C.DOC: CEnvi Shareware Manual, Chapter 3: Cmm versus C, for C
              Programmers
CENVILIB.DOC: CEnvi Shareware Manual, Chapter 4: Function Library
LICENSE.DOC:  CEnvi Unregistered Shareware License Agreement
README.DOC:   Introductory file. Read this first for quick intallation.
REGISTER.DOC: CEnvi registration form
INSTALL.CMM:  Cmm source file for installing this shareware version

*.CMM, *.CMD, *.BAT, *.LIB: Many sample programs using CEnvi for OS/2.
  See CENVI.DOC for a complete list.

-------------------------- REGISTRATION --------------------------------

This is a shareware release  Please register.  As a registered CEnvi user
you will receive the following benefits:

*The latest version of CEnvi for all supported platforms (currently DOS,
  OS/2, Windows, and NT).
  
*The CEnvi user's manual--about 200 pages, including a description of the
  Cmm programming language and a tutorial for those who have never programmed,
  and descriptions and examples of the over 150 functions included in the
  CEnvi library).
  
*/BIND option for creating standalone executables from Cmm scripts for
  your own personal use.
  
*Support from Nombas and CEnvi/Cmm users through CompuServe
  (72212,1622), internet (nombas@nobmas.com), the cenvi-cmm e-mail mailing
  list (cenvi-cmm@world.std.com), phone (617-391-6595), the Nombas BBS
  (617-391-3718), or Compuserve in PCUTIL forum 3.
  
*Access to the growing list of CEnvi utilities and libraries (some of which
  are included in this unregistered shareware package, and others are
  contributed by Nombas and CEnvi/Cmm users to the electronic locations
  described above). Available on the Nombas BBS, from internet via
  anonymous ftp at ftp.std.com in the /vendors/CEnvi-Cmm directory, or in
  CompuServe in PCUTIL library 3 (search on CEnvi, Cmm, CENV, & CNV).
 
There are four ways to register CEnvi version 2.00: 

************************************************************************
****** REGISTRATION METHOD 1: CENVI MAIL-IN/FAX REGISTRATION FORM ******
************************************************************************
Please fill out and mail in or fax this form, along with payment.

Name: _________________________________________________________________

Company: ______________________________ Position: _____________________

Address: ______________________________________________________________

_______________________________________________________________________

______________________________________________________________________

Country: _________________________   (add ZIP code if applicable)

Phone: ___________________________  EMail: ______________________________


CEnvi Single-user License & Manual .. Quantity _____ x $69.00 = $ _________
License fee for additional CEnvi users at your
organization (does not include additional manual
or diskettes)... Additional simultaneous users _____ x $39.00 = $ _________
10-User License .. 2 media & manual.. Quantity ____ x $299.00 = $ _________
50-User License .. 2 media & manual.. Quantity ____ x $899.00 = $ _________

Additional CEnvi Manuals ............ Quantity _____ x $15.00 = $ _________
Shipping outside USA, Canada, or Mexico  $4.00 ................ $ _________
                                                       Subtotal $ _________
Massachusetts residents please add 5% sales tax ............... $ _________
Check handling fee IF CHECK NOT DRAWN ON A U.S. BANK . $30.00 = $ _________

                                                          Total $ _________

Include a check or money order for this total, IN U.S. FUNDS AND DRAWN ON A
U.S. BANK (if not drawn on U.S. bank then add the $30 handling fee),
payable to Nombas, or supply the following credit card payment information.

Credit card orders (circle one): MasterCard / Visa / American Express

    Card Number _____________________________________  Expires ____________

    Exact name on card (print) ____________________________________________

    Signature (REQUIRED) __________________________________________________

Mail this form, along with payment or credit information, to:
               Nombas
               64 Salem St.
               MEDFORD MA 02155   USA
or fax to:
               Nombas
               (617) 391-3842


***************************************************************************
******** REGISTRATION METHOD 2: COMPUSERVE ELECTRONIC REGISTRATION ********
***************************************************************************
CompuServe members may register directly through the CompuServe
Registration Service.  To use this service enter GO SWREG at your CI$
prompt.  Registration ID is 1354 for CEnvi for DOS, 1355 for CEnvi for
OS/2, and 1356 for CEnvi for Windows (you only need to register ONE
version).  Nombas will immediately be informed of your registration, and
the CEnvi registration fee will automatically be added to your CompuServe
bill.


***************************************************************************
************ REGISTRATION METHOD 3: Public (software) Library *************
***************************************************************************
CREDIT CARD ORDERS ONLY -

You can order with MC, Visa, Amex, or Discover from Public (software)
Library by calling 800-2424-PsL or 713-524-6394 or by FAX to 713-524-6398
or by CIS EMail to 71355,470. You can also mail credit card orders to PsL
at P.O.Box 35705, Houston, TX 77235-5705.

THE ABOVE NUMBERS ARE FOR ORDERS ONLY.

Any questions about the status of the shipment of the order, refunds,
registration options, product details, technical support, volume discounts,
dealer pricing, site licenses, etc., must be directed to Nombas (see phone
number and addresses below).

To insure that you get the latest version, PsL will notify Nombas the day
of your order and we will ship the product directly to you.

CEnvi (all versions) is PsL product #11069.


***************************************************************************
************** REGISTRATION METHOD 4: KDL (Germany) Library ***************
***************************************************************************

Registration and instructions may be found through KDL-Registration Service
in Germany:

fax number:
	* for German customers only:	089-895626-99
	* for international customers: ++49-895626-99

phone number: 
	* for German customers only:	089-895626-50
	* international customers:	++49-89-895626-50

Normally we do not take any orders by phone, but this number can be used to
request our registration form and our general registration rules.

Email-adresses:
	* INTERNET:100347.2627@compuserve.com
	* INTERNET:regservice@kellydata.de

The second number is available in March 1996, but should be used from that time
on.
	
Mail.adress:	KDL-Registrierungsservice
		Norbert M. Burkhard
		Lena-Christ-Str.: 50
		82152 Martinsried  / Munich
		Germany

***************************************************************************
Thank you for trying this shareware copy of CEnvi.  Mail inquires and other
correspondences to:
     Nombas
     64 Salem Street
     Medford, MA  02155   USA

Nombas may also be contacted at:
     Phone:      (617)391-6595
     Internet:   nombas@nombas.com
     WEB:        http://www/nombas.com
     CompuServe: 72212,1622
     BBS:        (617)391-3718
     Fax:        (617)391-3842
