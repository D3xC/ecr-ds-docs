Translated file…
1.	Translation of the file includes all fields.
2.	All name and address information has been properly translated. 
3.	Make sure the name and address meet the 40 character\3 address line maximum standard for import.
4.	Check for any hidden columns.
5.	Check for secondary addresses and make sure they are captured.  Secondary addresses go into the ADR_SCH table.
6.	Item ID and Item Source columns are accurately captured (If applicable).
7.	Category codes are accurately captured (If applicable).
8.	Category codes must exist in the Category table and descriptions cannot be changed in that table.
9.	Validate the field names assigned by the programmers are in line with the standard field names.
10.	Case numbers must be assigned to all schedules and case numbers must exist in the Debtor table.
11.	Validate none of the schedules are to be redacted.
12.	Run the QASCHED program which will help check.
13.	The counts, Desc_memo (Description), case #s, CUDs (ncont, ndisp, nunliq, nundet), category codes (if applicable), schedule classes (D, E, F, G), schedule amounts (priority, secured and unsecured), co-debtor (if applicable), compcode (Vendor ID or Employee ID) and taxid (if applicable) match in the translated file with the original file provided.
14.	Fields BYWHO, WHERE, LONGNAME, WORKNAME and FILENAME are populated.
In Schedule table…
15.	The counts, Desc_memo(Description), case #s, CUDs(ncont, ndisp, nunliq, nundet), category codes (if applicable), schedule classes (D- Secclass, E- Priclass, F- unsclass, G-classg), schedule amounts (E-priority, D- secured and F-unsecured), co-debtor (if applicable), compcode (if applicable)  and taxid (if applicable) match in the schedule table with the translated file
16.	The usual time stamp fields (NETID1, NETID2, USERID1, USERID2, LAST_EDIT, LASTTIME, ENTDATE).
17.	Item ID and Item Source are imported into the Custdata table (if applicable).
18.	Provide case manager with schedule summary report once all schedules have been imported.
19.	No duplicate uniquenums or schedule numbers are assigned when imported.
20.	Confirm chk_sch.prg and mov_sch.prg have been run by the programmer.
In Merge2 table…
21.	Once the schedules are moved into Merge2 please do a count of the Schedule table and a count of schedules in the Merge2 table to confirm the counts match.
22.	No duplicate uniquenums or schedule numbers are assigned when imported.
23.	The same checks as in schedule counts, schedule number, uniquenum, name and address, case #s, CUDs(cont, disp, unliq, undet), category codes (if applicable), schedule classes(D-schclass2, E-schclass, F-schclass3, G), schedule amounts (E-claim2, D-claim22, F-claim23) match with the schedule table.  Check that CUD schedules are given a contract of CUD, zero dollar schedules are given ZER as a contract code and that schedule Gs are given a contract code of SCG.
24.	A  TXNUM2 has been populated and not duplicate.  
25.	Make sure the correct bar date is entered (If applicable).
26.	The schedprnt field is populated with the correct schedule class.  In cases where there are multiple classes the higher class goes in.
27.	Request bar date.  (01/01/1980 will be assigned if there is no bar date at the time of import).
