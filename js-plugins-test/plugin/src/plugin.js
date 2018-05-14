export default function me() {

    // eslint-disable-next-line no-console
    console.log('register 3rd party plugin');
    // console.log('register: ' + data + ' ' + info);
    return {
        getDisplayName: function () {
            return '3rd party';
        }
    };
    // callback(null, function() { return '3rd-party';});
    // callback(null, function() { return '3rd-party';});
}
