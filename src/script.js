const call_history = [{
    unix_time: 123456,
    phone_number: '0543553575'
}];

//  const phone_contacts = [{
//     name: 'Meir',
//     phone_number: 054333123123
//   }]

const phone_contacts = [{
    name: "Meir",
    phone_number: '0543553575'
}]



function convertToMap(array, keyName) {
    let map = {};
    for (let i = 0; i < array?.length; i++) {
        const element = array[i];
        const keyValue = element[keyName];
        if (!map[keyValue]) {
            map[keyValue] = element;
        }
    }
    return map
}


function print_birthday_invitees(phone_contacts, call_history) {
    const invitees = new Map();
    //conver array to map with user name as key
    const phone_contact_length = phone_contacts.length;
    //filter out all items that didnot match to search.
    const call_history_filtered = call_history.filter((call) => now.to_i - call.unix_time < 7776000000);
    const call_history_filtered_map = convertToMap(call_history_filtered, 'phoneNumber');
    let y = 0;
    for (i = 0; i < phone_contact_length; i++) {
        const phone_contact = phone_contacts[i];

        if (call_history_filtered_map.get(phone_contact.phoneNumber) && !invitees.get(phone_contact.name)) {
            invitees.add(phone_contact.name, { name: phone_contact.name, phone: phone_contact.phone_number });
            print(`${y} - ${invitees.name}, ${invitees.phone}`);
            y = y + 1;
        }
    }
}
