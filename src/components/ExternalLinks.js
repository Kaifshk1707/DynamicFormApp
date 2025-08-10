import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

const ExternalLinks = ({ icon, links }) => {
    return (
        <View style={{ flexDirection: "row", gap: 8, margin: 10 }}>
            <Feather name={icon} size={24} color="#249781" />
            <Text style={{fontSize:15, color:"#7bb3d4ff"}}>
                {links}
            </Text>
        </View>
    )
} 

export default ExternalLinks