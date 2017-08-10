if (Categories.find().count() === 0) {

  Categories.insert({
    title: 'Foundations',
    file: 'foundations.md',
    icon: 'build',
    articles: [{ text: 'Chapter 11 Basics', file: 'chapter11-basics.md' }, { text: 'Client Setup', file: 'client-setup.md' }, { text: 'Monthly Billing Reports', file: 'reports-billing.md' }],
    mdString: ''
  });

  Categories.insert({
    title: 'Mail',
    file: 'mail.md',
    icon: 'mail',
    articles: [{ text: 'From MSL', file: 'mail-msl.md' }, { text: 'From Creditor', file: 'mail-creditor.md' }, { text: 'From Merge2' }, { text: 'From Translation', file: 'mail-translation' }],
    mdString: ''
  });

  Categories.insert({
    title: 'Updates',
    file: 'updates.md',
    icon: 'sync',
    articles: [{ text: 'MSL' }, { text: 'Creditor' }, { text: 'Merge2' }, { text: 'Dtcstock' }, { text: 'ap_check' }],
    mdString: ''
  });

  Categories.insert({
    title: 'Reports',
    file: 'reports.md',
    icon: 'insert_chart',
    articles: [{ text: 'Creditor' }, { text: 'Claims/Schedules' }, { text: 'Pay Address' }, { text: 'Transfer' }],
    mdString: ''
  });

  Categories.insert({
    title: 'Epiq11.com',
    file: 'epiq11.md',
    icon: 'web',
    articles: [{ text: 'Debtor Matrix Setup' }, { text: 'Initial Mockup' }],
    mdString: ''
  });

  Categories.insert({
    title: 'Admin',
    file: 'epiq11.md',
    icon: 'storage',
    articles: [{ text: 'Client Setup' }, { text: 'Monthly Billing Reports' }, { text: '' }],
    mdString: ''
  });
}

