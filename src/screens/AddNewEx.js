import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import SaveEx from '../components/SaveEx'

export const AddNewEx = ({addEx, navigation}) => {

	const increment = (number) => {
		return number
	}

	const decrement = (number) => {
		return number
	}
	let state = {
		description: '',
		approaches: 0,
		repetitions: 0,
		rest: 0,
	}
	return (
		<View style={styles.wrapper}>
			<View style={[styles.descriptionContainer, styles.section]}>
				<TextInput 
                style={[styles.textinput, styles.descriptionText]}
                onChangeText={(text) => {
                    if (text)
                        state.description = text
                    }}
                placeholder='Упражнение'>
                </TextInput>
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
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>

				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.approaches = text
                    }}
                placeholder='Кол-во подходов'>
                </TextInput>

				<TouchableOpacity
					style={styles.button}
					onPress={decrement}
				>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>
			</View>
			<View style={[styles.repetitionsContainer, styles.section]}>
				<TouchableOpacity
					style={styles.button}
					onPress={increment}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>

				<TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.repetitions = text
                    }}
                placeholder='Кол-во повторов'>
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

			{/*<SaveEx onSubmit={  } value={ state } navigation={navigation}/>*/}
			
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		height: '100%',
		minWidth: 320,
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#c4c4c4',
	},
	section: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 45,
	},

	approachesContainer: {
		
	},

	textinput: {
		height: 45,
		marginHorizontal: 20,
		textAlign: 'center',
		fontSize: 32,
		// border: 'none'
	},
	descriptionText: {

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

	buttonText: {
		
		textAlignVertical: "center",
		textAlign: 'center',
		flexDirection: 'row',
		color: '#fff',
		fontSize: 41,

		

	}
})