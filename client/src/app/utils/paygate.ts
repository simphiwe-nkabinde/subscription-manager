import md5 from 'js-md5';

function initiatePayment() {
    
    const encryptionKey = 'secret';

    let payload: any = {
          'PAYGATE_ID': 10011072130,
          'REFERENCE': 'pgtest_123456789',
          'AMOUNT': 3299,
          'CURRENCY': 'ZAR',
          'RETURN_URL': 'https://my.return.url/page',
          'TRANSACTION_DATE': new Date().toISOString(),
          'LOCALE': 'en-za',
          'COUNTRY': 'ZAF',
          'EMAIL': 'customer@paygate.co.za'
    }

    const checksum = md5(Object.values(payload).join('') + encryptionKey);

    payload['CHECKSUM'] = checksum;

    const fieldString = new URLSearchParams(payload).toString()
}