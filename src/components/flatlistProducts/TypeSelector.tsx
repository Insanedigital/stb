import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface TypeSelectorProps {
    types: string[];
    selectedType: string | null;
    onChange: (type: string | null) => void; 
  }
  
  export const TypeSelector = ({ types, selectedType, onChange }: TypeSelectorProps) => {
    return (
      <View style={styles.typeSelectorContainer}>
        {types.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.typeButton,
              selectedType === type && styles.selectedTypeButton,
            ]}
            onPress={() => onChange(type)}
          >
            <Text style={[styles.typeButtonText, selectedType === type && styles.selectedTypeButtonText]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    typeSelectorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    typeButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 20,
      marginHorizontal: 5,
    },
    typeButtonText: {
      fontSize: 16,
      color: '#555',
    },
    selectedTypeButton: {
      backgroundColor: '#555',
    },
    selectedTypeButtonText: {
      color: '#fff',
    },
  });