import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Modal } from 'react-native'
import SaveEx from '../components/SaveEx'

export const AddNewEx = ({ex, route, addClientEx, navigation}) => {

	let approaches = 0
	let repetitions = 0
	let PHapproaches = 'Кол-во подходов'
	let PHrepetitions = 'Кол-во повторений'

	const {client} = route.params

	const increment = (number) => {
		return (++number)
	}

	const decrement = (number) => {
		return (--number)
	}

	let state = {
		name: '',
		weight: '',
		approaches: '',
		repetitions: '',
		rest: '',
		clientId: client.id
	}
	return (
		<View style={styles.wrapper}>
			<View style={[styles.descriptionContainer, styles.section]}>
				<View style={[styles.add, styles.addEx]}>
		            <TouchableOpacity 
		              style={styles.buttonStyle}
		              onPress={() => {
						  <View>
							  {
								alert(client.name)
							  }
						  </View>
					  }}
		            >
		              <Text style={styles.buttonText}>Упражнение ▼</Text>
		            </TouchableOpacity>
		          </View>
			</View>
			<View style={[styles.weightContainer, styles.section]}>
				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.weight = text
                    }}
                placeholder='Вес'>
                </TextInput>
			</View>
			<View style={[styles.approachesContainer, styles.section]}>
				<TouchableOpacity
					style={styles.button}
					onPress={increment}
				>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>

				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.approaches = text
                    }}
                placeholder={PHapproaches}>
                </TextInput>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						approaches = increment(approaches)
						if (approaches > 0) {
							PHapproaches = approaches.toString()
						}
					}}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={[styles.repetitionsContainer, styles.section]}>
				<TouchableOpacity
					style={styles.button}
					onPress={increment}
				>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>

				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.repetitions = text
                    }}
                placeholder={PHrepetitions}>
                </TextInput>

                <TouchableOpacity
					style={styles.button}
					onPress={increment}

				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>

			</View>
			<View style={[styles.restContainer, styles.section]}>
				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.rest = text
                    }}
                placeholder='Время отдыха'>
                </TextInput>
			</View>

			<TouchableOpacity
				style={styles.save}
				onPress={()=>{
					addClientEx(state)
				}}
			>
				<Text style={styles.buttonText}>Сохранить</Text>
			</TouchableOpacity>

			{/*<SaveEx onSubmit={  } value={ state } navigation={navigation}/>*/}
			
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 20,
		width: '100%',
		height: '100%',
		minWidth: 400,
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#c4c4c4',
	},
	section: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 45,
	},

	approachesContainer: {
		
	},

	textinput: {
		maxWidth: 250,
		width: '80%',
		height: 45,
		marginHorizontal: 20,
		textAlign: 'center',
		fontSize: 32,
		// border: 'none'
	},
	descriptionText: {

	},

	save: {
		marginVertical: 45,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 3,
        backgroundColor: '#292929',
    },
    buttonText: {
        color: '#fff',
        fontSize: 32,
    },

	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 90,
		height: 90,
		borderRadius: 3,
      	backgroundColor: '#292929',
      	// boxShadow: '0 2px 4px #210672'
      
	},

	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#292929',
	},

	buttonText: {
		
		textAlignVertical: "center",
		textAlign: 'center',
		flexDirection: 'row',
		color: '#fff',
		fontSize: 32,

		

	},

	add: {

      textAlign: 'center',
      
      justifyContent: 'center',
      alignItems: 'center',
      
     
      maxWidth: 250,
      width: '80%',
      marginHorizontal: 20,
      marginLeft: 110,
      flexDirection: 'row',
      
      borderRadius: 3,
      backgroundColor: '#292929',
      // boxShadow: '0 2px 4px #210672'
      // backgroundColor: '#216Fd1',
      // boxShadow: '0 2px 4px #210672'
      

    },
	addEx: {
      
    },
})