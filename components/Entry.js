import React,{useState} from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";
import { FormControl, Radio, Button } from "native-base";



const Entry = () => {
  const [formState, setFormState] = useState({productName: "", price: "", option:"Feros" })
  
  const productNameChangeHandler = (eventText) => {
    setFormState(prevState=> ({...prevState, productName: eventText}))
  }
  const priceChangeHandler = (eventText) => {
    setFormState(prevState=> ({...prevState, price: eventText}))
  }

  const optionChangeHandler = (eventText) => {
    setFormState(prevState=> ({...prevState, option: eventText}))

  }
  console.log(formState)
  return (
    <KeyboardAvoidingView
      style={styles.createCard}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FormControl style={styles.inputs}>
        <TextInput value={formState.productName} onChangeText={productNameChangeHandler} placeholder='Product Name?' style={styles.productName} />
        <TextInput value={formState.price} onChangeText={priceChangeHandler}  placeholder='Price?' style={styles.Price} />
      </FormControl>
      <FormControl>
        <Radio.Group name='provider' style={styles.providers} onChange={optionChangeHandler} value={formState.option} >
          <Radio value='Feros' my={1}>
            Feros
          </Radio>
          <Radio value='Dad' my={1}>
            his dad
          </Radio>
          <Radio value='Mom' my={1}>
            his mother
          </Radio>
          <Button key={"sm"} size={"sm"}>
            ADD
          </Button>
        </Radio.Group>
      </FormControl>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  createCard: {
    paddingVertical: 10,
    backgroundColor: "#ecfeff",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  inputs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  productName: {
    width: "75%",
    borderColor: "#164e63",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
  },
  Price: {
    // marginStart: ,
    width: "20%",
    borderColor: "#164e63",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
  },
  providers: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});
export default Entry;
