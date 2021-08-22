

async function getUserTransaction(uid, txnType, monthYear){
    const url = 'https://jsonmock.hackerrank.com/api/transactions/search?userId='+uid;
    const responses = await fetch(url);
    console.log(responses);
}

getUserTransaction(4, 'debit', '02-2019');