import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from "react-native-svg"; // Import Svg elements

const Notification = () => {
    return (
        <View>
            <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
     <Path d="M12.02 3.41016C8.71 3.41016 6.02 6.10016 6.02 9.41016V12.3002C6.02 12.9102 5.76 13.8402 5.45 14.3602L4.3 16.2702C3.59 17.4502 4.08 18.7602 5.38 19.2002C9.69 20.6402 14.34 20.6402 18.65 19.2002C19.86 18.8002 20.39 17.3702 19.73 16.2702L18.58 14.3602C18.28 13.8402 18.02 12.9102 18.02 12.3002V9.41016C18.02 6.11016 15.32 3.41016 12.02 3.41016Z" stroke="#0F172A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
     <Path d="M13.87 3.69994C13.56 3.60994 13.24 3.53994 12.91 3.49994C11.95 3.37994 11.03 3.44994 10.17 3.69994C10.46 2.95994 11.18 2.43994 12.02 2.43994C12.86 2.43994 13.58 2.95994 13.87 3.69994Z" stroke="#0F172A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
     <Path d="M15.02 19.5601C15.02 21.2101 13.67 22.5601 12.02 22.5601C11.2 22.5601 10.44 22.2201 9.89999 21.6801C9.35999 21.1401 9.01999 20.3801 9.01999 19.5601" stroke="#0F172A" stroke-width="1.5" stroke-miterlimit="10"/>
</Svg>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Notification;
