+ Review The POC checklist –specifically items 1-4 - [POC checklist](http://epicenter.epiqsystems.com/cr/dataservices/Shared%20Documents/Proof%20of%20Claim/POC%20checklist.docx)
+ Identify the parties (keyvalues) that should receive a proof of claim according to the case managers request;
+ If all creditors’ , claims, and schedules, then proceed to step 4
  - If only a subset of parties, proceed to step 3
+	Set the reprint field to true for any record in creditor or merge2 that should receive a POC, otherwise false
+ In Legacy navigate proof of claim form screen via the reports menu
  - Click on court Reports
  - Click on reports menu again
  - Select proof of claim form
+ Select Reprint Proofs if only a subset of parties are needed for the mailing (The parties set with the reprint flag) otherwise click print report
+ Copy prfsnd2 and poc_counts to you working directory and modify the section below accordingly
+	After the program is finished running you will have three tables loaded; poc_combined, bad_addresses, and crsbads.Review crsbads (bad characters) and bad addresses if needed
+ Run poc_counts from your working directory and provide the results to QA