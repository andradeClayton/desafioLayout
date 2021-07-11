import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Des01 = ()=>{

    return(
        <View style={styles.container}>
           <View style={styles.retsup}></View>

           <View style={styles.vieSup}>
             <View style={styles.quadrado}></View>
             <View style={styles.ret1}></View>
           </View>

           <View style={styles.vieGemeos}> 
                <View style={styles.vieGemeo1}></View>
                <View style={styles.vieGemeo2}></View>
           </View>

           <View style={styles.viemeio}></View>

           <View style={styles.vieInferior}>
                 <View style={styles.quadrado2}></View>
                 <View style={styles.quadrado2}></View>
                 <View style={styles.quadrado2}></View>
                 <View style={styles.quadrado2}></View>
                 <View style={styles.quadrado2}></View>
                 <View style={styles.quadrado2}></View>
           </View>

           <View style={styles.retInferiro}></View>
        </View>
    );

}



const styles = StyleSheet.create({

    container:{
        flex:1,
      },

      vieSup:{
        //   flex:1,
         height: '35%',
          justifyContent:'space-evenly',
          alignItems:'center',
         
        
      },

      vieGemeos:{
           
            height:78,
            flexDirection:'row'
      },

      vieGemeo1:{
          height: '100%',
          width:'50%',
          backgroundColor:"#9013FE",
      },

      vieGemeo2:{
        height: '100%',
        width:'50%',
        backgroundColor:"#4A90E2",
    },

    viemeio:{
      
        height:13,
        backgroundColor:"#50E3C2",
    },

    retsup:{
            height: 25,
            backgroundColor:"#50E3C2",
    },

    vieInferior:{
        height: '40%',
        flexDirection:'row',
        flexWrap:'wrap',
         alignContent:'center',
        justifyContent:'center', 
       
       
        

       
        // flexWrap:'wrap',
        // alignContent:'space-around'
       
        
         
        
        // justifyContent:'space-around',
     

    },
    quadrado:{
        // margin:15,
        width: 100,
        height:100,
        backgroundColor:"#F5A623",
       
       

    },
    quadrado2:{
        margin:"4%",
       
        width: 100,
        height:100,
        backgroundColor:"#F5A623",
       
       

    },
    ret1:{
        width: 140,
        height:30,
        backgroundColor:"#F5A623",

    },

    retInferiro:{
        
        height: 60,
        backgroundColor:"#4A90E2",
    }

});

export default Des01;