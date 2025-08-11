import { View, Text, Image } from "react-native";
import ExternalLinks from "./ExternalLinks";
import ImageView from "./ImageView";

const FormData = ({ userDetails }) => {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: "#249781",
        borderRadius: 12,
        padding: 16,
        backgroundColor: "#172F52",
        gap: 16,
      }}
    >
      {/* Profile Row */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        {userDetails.image ? (
          <ImageView URI={userDetails.image} />
        ) : (
          <Image
            source={require("./../assets/images/empty.jpeg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              borderWidth: 3,
              borderColor: "#249781",
              resizeMode: "cover",
            }}
          />
        )}

        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            {userDetails.userName}
          </Text>
          <Text style={{ color: "#d0d8f0", fontSize: 16, fontStyle: "italic" }}>
            {userDetails.title}
          </Text>
          <Text style={{ color: "#a8b6cc", fontSize: 14, fontStyle: "italic" }}>
            {userDetails.member && "Member of Code Club" }
            
          </Text>
        </View>
      </View>

      {/* Bio Section */}
      <Text style={{ color: "#7bb3d4", fontSize: 15, lineHeight: 20 }}>
        {userDetails.bio}
      </Text>

      {/* Links Section */}
      <View style={{ gap: 8 }}>
        <ExternalLinks links={userDetails.website} icon="globe" />
        <ExternalLinks links={userDetails.linkedin} icon="linkedin" />
        <ExternalLinks links={userDetails.github} icon="github" />
      </View>
    </View>
  );
};

export default FormData;
