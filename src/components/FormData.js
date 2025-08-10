import { View, Text, Image } from 'react-native';
import ExternalLinks from './ExternalLinks';

const FormData = () => {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: '#249781',
        borderRadius: 12,
        padding: 16,
        backgroundColor: '#172F52',
        gap: 16,
      }}
    >
      {/* Profile Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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"
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            borderWidth: 3,
            borderColor: '#249781',
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>
            UserName
          </Text>
          <Text style={{ color: '#d0d8f0', fontSize: 16, fontStyle: 'italic' }}>
            Title
          </Text>
          <Text style={{ color: '#a8b6cc', fontSize: 14, fontStyle: 'italic' }}>
            Member of code club
          </Text>
        </View>
      </View>

      {/* Bio Section */}
      <Text style={{ color: '#7bb3d4', fontSize: 15, lineHeight: 20 }}>
        A profile typically refers to an article about a person, organization, or concept.
        These articles are written collaboratively by many users and aim to provide a
        neutral, comprehensive, and verifiable overview of the subject.
      </Text>

      {/* Links Section */}
      <View style={{ gap: 8 }}>
        <ExternalLinks links="https://www.google.com" icon="globe" />
        <ExternalLinks links="https://www.linkedin.com" icon="linkedin" />
        <ExternalLinks links="https://github.com" icon="github" />
      </View>
    </View>
  );
};

export default FormData;
