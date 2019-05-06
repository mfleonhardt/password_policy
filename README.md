# Password policy
In our installation, employee accounts are provided through Active Directory.  Client accounts are database users and are strengthened using the password policy app.  We require our clients to use a valid company email with their account and the data shared between us and our clients is proprietary and potentially quite sensitive.

We have three use cases the app does not provide for:

1. For whatever reason, our IT personnel want to reset the password for a single database user or group of users.
2. Have the ability to reset passwords for all database users in the event of a major security incident.
3. Since we do not necessarily know when our clients may leave the employment of their respective companies (and should no longer have access to the accounts), require periodic password changes conditional on maintaining access to the registered email account.

In order to meet these requirements, this fork will
* implement an optional password expiration configuration
* add a check for expired passwords to the validation logic
* allow administrators to immediately expire passwords
* add administrator override controls to the settings and users templates
* utilize the existing forgot password mechanism in the event of an expired password
