// EXERCISE 1
//
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//   <View style = {{marginTop: 50, margin: 20}}>
//       <Text style = {{fontSize : 24}}>
//       RP values
//   </Text>
// <Text style = {{color: 'green'}}>
//     Excellence
// </Text>
//       <Text style = {{backgroundColor : 'yellow'}}>
//           Customer-centric
//       </Text>
//       <Text style = {{fontStyle: 'italic'}}>
//           Integrity
//       </Text>
//       <Text style = {{alignSelf: 'center'}}>
//           Teamwork
//       </Text>
//       <Text style = {{ backgroundColor : 'black', color: 'white'}}>
//           Enterprising
//       </Text>
//   </View>
//   )
// }
//
// export default Exercise1;

// Exercise 2
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     greenBox : {
//     width: 100,
//         height: 100,
//             marginTop:30,
//             backgroundColor: 'green',
//             borderWidth: 1,
//             borderColor: 'black'
// },
//  boxText: {
//     textAlign: 'center',
//         color: 'white'
//  },
//
// title: {
//     fontWeight: 'bold',
// }
// });
//
// const Exercise2 = () => {
//     return (
//         <View style = {{marginTop: 50, margin: 20}}>
//             <View style = {styles.greenBox}>
//                 <Text style = {[styles.boxText,styles.title]}>Who we are </Text>
//             </View>
//             <View style = {styles.greenBox}>
//                 <Text style = {styles.boxText}>Our people</Text>
//             </View>
//             <View style = {styles.greenBox}>
//                 <Text style = {styles.boxText}>Our campus </Text>
//             </View>
//         </View>
//     )
// }
//
// export default Exercise2;

//Exercise 3
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//     return (
//         <View style={[styles.Parent, {marginTop: 20}]}>
//             <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//                 <Text>Child 1</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//                 <Text>Child 2</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//                 <Text>Child 3</Text>
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         padding: 10,
//         justifyContent: 'space-around',
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         padding: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

//Exercise 3B

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//     return (
//         <View style={styles.Parent}>
//             <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//                 <Text>Child 1</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//                 <Text>Child 2</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//                 <Text>Child 3</Text>
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column', // Layout children vertically
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         padding: 10,
//         justifyContent: 'space-around', // Distribute children vertically
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

// Exercise 3C
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//     return (
//         <View style={styles.Parent}>
//             <View style={[styles.Child, { backgroundColor: 'powderblue', maxWidth: 90}]}>
//                 <Text>Child 1</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//                 <Text>Child 2</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: 'steelblue', maxHeight:120}]}>
//                 <Text>Child 3</Text>
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column', // Layout children vertically
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         padding: 10,
//         justifyContent: 'space-around', // Distribute children vertically
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//         alignItems: 'center',    },
// });

// Exercise 3D
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,},
// });
//
// const Exercise3D =() => {
//     return (
//         <View style={[styles.Parent, {marginTop:50}]}>
//             <Text style={[styles.Child, { backgroundColor: 'powderblue', flex:1}]}>Child 1</Text>
//             <Text style={[styles.Child, { backgroundColor: 'skyblue',flex:2}]}>Child 2</Text>
//             <Text style={[styles.Child, { backgroundColor: 'steelblue', flex:3}]}>Child 3</Text>
//         </View>
//     )
// }
// export default Exercise3D;

//Exercise 3E

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         // justifyContent: 'flex-start', // Change this value for different alignments
//         // justifyContent: 'flex-end',
//         justifyContent: 'space-around',
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });
//
// const Exercise3E = () => {
//     return (
//         <View style={[styles.Parent, { marginTop: 50 }]}>
//             <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//                 Child Three
//             </Text>
//         </View>
//     );
// };
//
// export default Exercise3E;


//Exercise 4

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise4 = () => {
    return (
        <View style={styles.Parent}>
            {/* Blue Box with Text */}
            <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
                <Text style={styles.Text}>Square 1</Text>
            </View>

            {/* Green Box with Text */}
            <View style={[styles.Child, { backgroundColor: 'green' }]}>
                <Text style={styles.Text}>Square 2</Text>
            </View>

            {/* Red Box with Text */}
            <View style={[styles.Child, { backgroundColor: 'red' }]}>
                <Text style={styles.Text}>Square 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center', // Centers children vertically
        justifyContent: 'space-around', // Distributes children horizontally
    },
    Child: {
        width: 80,
        height: 80,
        justifyContent: 'center', // Centers text vertically
        alignItems: 'center', // Centers text horizontally
    },

});

export default Exercise4;

