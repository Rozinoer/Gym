import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { addClientEx } from '../store/actions/client'
import { THEME } from '../theme'
import { Navbar } from '../components/Navbar'

export const AddNewEx = ({route, navigation}) => {

	const [approaches, setApproaches] = useState(0)
	const [reptetittions, setReptetittions] = useState(0)

	const {client} = route.params

	let state = {
		name: 'ex',
		weight: '13',
		approaches: '13',
		repetitions: '',
		rest: '',
		id: '',
		clientID: client.id
	}

	const dispatch = useDispatch()

	const add = () => {
		dispatch(addClientEx(state))
	}
	const onPress = () => {
		navigation.navigate('Info')
	}

	return (
		<View style={styles.wrapper}>
			<Navbar 
				onPress={onPress}
				title='Новое Упражнение'
			/>
			<View style={[styles.descriptionContainer, styles.section]}>
				<View style={[styles.add, styles.addEx]}>
					<TextInput 
                	style={[styles.textinput, styles.tittleTextInput]}
                	onChangeText={(text) => {
                    if (text)
                        state.name = text
                    }}
                	placeholder='Название'
                	placeholderTextColor='grey'
                	>

                	</TextInput>
		          </View>
			</View>
			<View style={[styles.weightContainer, styles.section]}>
				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.weight = text
                    }}
                placeholder='Вес'
                placeholderTextColor='grey'
                >
                </TextInput>
			</View>
			<View style={[styles.approachesContainer, styles.section]}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						setApproaches(approaches - 1)
					}}
				>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>

				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.approaches = text
                    }}
                placeholder={approaches === 0 ? 'Подходы' : approaches.toString()}
                placeholderTextColor='grey'
                >

                </TextInput>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						setApproaches(approaches + 1)
					}}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={[styles.repetitionsContainer, styles.section]}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						setReptetittions(reptetittions - 1)
					}}
				>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>

				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.repetitions = text
                    }}
                placeholder={reptetittions === 0 ? 'Повторения' : reptetittions.toString()}
                placeholderTextColor='grey'
                >
                </TextInput>

                <TouchableOpacity
					style={styles.button}
					onPress={() => {
						setReptetittions(reptetittions + 1)
					}}

				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>

			</View>
			<View style={[styles.restContainer, styles.section]}>
				<TextInput 
                style={[styles.textinput, styles.restTextInput]}
                onChangeText={(text) => {
                    if (text)
                        state.rest = text
                    }}
                placeholder='Время отдыха'
                placeholderTextColor='grey'
                >
                </TextInput>
			</View>

			<TouchableOpacity
				style={styles.save}
				onPress={()=>{
					add()
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
		minWidth: 300,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: THEME.BACKGROUND_COLOR_DARK,
	},
	section: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 45,
	},
	descriptionContainer: {
		width: '90%',
	},
	restContainer: {

	},

	tittleTextInput: {
		width: '90%',

	},
	restTextInput: {
		width: '90%',
	},

	approachesContainer: {
		
	},

	textinput: {
		maxWidth: 250,
		width: '40%',
		flexDirection: 'row',
		marginHorizontal: 20,
		textAlign: 'center',
		flexWrap: 'wrap',
		fontSize: THEME.REGULAR_FONT_SIZE,
		color: 'grey'

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
        backgroundColor: THEME.RED,
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
		borderRadius: 45,
      	backgroundColor: THEME.RED,
      	// boxShadow: '0 2px 4px #210672'
      	elevation: 2,
      
	},

	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		
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
      marginHorizontal: 20,
      
      flexDirection: 'row',
      
      borderRadius: 3,


      
      

    },
	addEx: {
      
    },
})