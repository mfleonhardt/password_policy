OC.L10N.register(
    "password_policy",
    {
    "Password needs to be at least %s characters long" : "A jelszó legalább %s karakter hosszú kell legyen",
    "Password needs to contain at least one lower and one upper case character." : "A jelszónak legalább egy kisbetűt és legalább egy nagybetűt kell tartalmaznia.",
    "Password needs to contain at least one numeric character." : "A jelszónak legalább egy numerikus karaktert kell tartalmaznia.",
    "Password needs to contain at least one special character." : "A jelszónak legalább egy speciális karaktert kell tartalmaznia.",
    "Password is among the 1,000,000 most common ones. Please make it unique." : "A jelszó az 1.000.000 leggyakoribb között van. Kérlek tedd egyedivé.",
    "Password is present in compromised password list. Please choose a different password." : "A jelszó benne van a feltörtek listájában. Kérlek válassz másikat.",
    "Password policy" : "Jelszó házirend",
    "Allows admins to configure a password policy" : "Engedélyezi az rendszergazdáknak, hogy jelszó szabályozást állítsanak be",
    "Allow admin to define certain pre-conditions for password, e.g. enforce a minimum length" : "Engedélyezi az rendszergazdának, hogy számos feltételt állítsanak be a jelszóhoz, mint például a megkövetelt minimális hossz",
    "Minimal length" : "Minimális hossz",
    "Forbid common passwords" : "Egyszerű jelszavak tiltása",
    "Enforce upper and lower case characters" : "Nagybetűs és kisbetűs karakterek megkövetelése",
    "Enforce numeric characters" : "Numerikus karakterek megkövetelése",
    "Enforce special characters" : "Speciális karakterek megkövetelése",
    "Check password against the list of breached passwords from haveibeenpwned.com" : "Ellenőrizd a jelszavadat a feltört jelszavak listájával a haveibeenpwned.com-on",
    "This check creates a hash of the password and sends the first 5 characters of this hash to the haveibeenpwned.com API to retrieve a list of all hashes that start with those. Then it checks on the Nextcloud instance if the password hash is in the result set." : "Ez az ellenörzés létrehoz egy hash-t a jelszóból aminek az első 5 karakterét hash formában elküldi a haveibeenpwned.com API-jának, hogy attól kapjon egy listát azokkal a hashe-ekkel aminek a kezdete megegyezik a megadott jelszó hash-ének az első 5 karakterével. Ezután leelenőrzi a Nextcloud egyeden, hogy a megadott jelszó benne van a kapott listában."
},
"nplurals=2; plural=(n != 1);");
