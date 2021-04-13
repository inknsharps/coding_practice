// We throw in the %0A for the line breaks, and %24 for the $ sign because this will be part of a gross mailto url
const makeScoreAndPartsTemplate = (customerName, workComposer, workTitle, scorePrice, partsPrice) => {
    const template = `Dear ${customerName},%0A%0A

Thank you for your request through Print on Demand, the work that you have requested, ${workComposer}'s ${workTitle} is available for %24${scorePrice} for the full score, and %24${partsPrice} for the parts, plus shipping and handling. If you would like to place an order for this, please reply to the email with a billing and shipping address, and phone number, and we will send you a pre-payment link via Stripe. Once payment has been received, we will send out the order to our printers for processing. Current delivery times will be 5-10 business days after payment has been received. Please let me know if you have any questions.%0A

Best,
    `;
    return template;
}
const makePartsOnlyTemplate = (customerName, workComposer, workTitle, partsPrice) => {
    const template = `Dear ${customerName},%0A%0A

Thank you for your request through Print on Demand, the work that you have requested, ${workComposer}'s ${workTitle} is available for %24${partsPrice} for the parts, plus shipping and handling. If you would like to place an order for this, please reply to the email with a billing and shipping address, and phone number, and we will send you a pre-payment link via Stripe. Once payment has been received, we will send out the order to our printers for processing. Current delivery times will be 5-10 business days after payment has been received. Please let me know if you have any questions.%0A

Best,
    `;
    return template;
}

const makeScoreOnlyTemplate = (customerName, workComposer, workTitle, scorePrice) => {
    const template = `Dear ${customerName},%0A%0A

Thank you for your request through Print on Demand, the work that you have requested, ${workComposer}'s ${workTitle} is available for %24${scorePrice}, plus shipping and handling. If you would like to place an order for this, please reply to the email with a billing and shipping address, and phone number, and we will send you a pre-payment link via Stripe. Once payment has been received, we will send out the order to our printers for processing. Current delivery times will be 5-10 business days after payment has been received. Please let me know if you have any questions.%0A

Best,
    `;
    return template;
}

module.exports = {
    makeScoreAndPartsTemplate,
    makeScoreOnlyTemplate,
    makePartsOnlyTemplate
}