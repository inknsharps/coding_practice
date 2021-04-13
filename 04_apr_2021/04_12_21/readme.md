# Email Generation Template

## Description

This is an email template generator to help me deal with daily emails that I make to customers on the daily. It makes use of the `open` npm package and opens up the email in the default mail application on your computer. 

While `nodemailer` would be a much more easier one stop option, unfortunately it did not play nicely with my office's authentication settings so mailto URL was used instead. Some workarounds had to be done such as encoding the line breaks and $ characters.