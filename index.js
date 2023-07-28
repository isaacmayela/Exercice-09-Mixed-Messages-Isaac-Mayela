function mixed_message(){
    list1 = ["J'aime","Tu adores","Samar s'amuse à","Joseph a fini de"]
    list2 = ["nager", "parler à tes collègues","jouer à la console","préparer"]
    list3 = ["avec cette culotte bleu","comme d'habitude","chez moi",", c'est bien !"]

    let random_index = Math.floor(Math.random() * list1.length)

    let message = list1[random_index] + " " + list2[random_index]+ " " + list3[random_index]

    console.log(message);
}


mixed_message()

// const sentence = {
//     elementS1 : {
//         subjet :"Marceline",
//         verb : "est",
//         complement : "gentille"
//     },
//     elementS2 : {
//         subjet :"Patrick",
//         verb :"",
//         complement : ""
//     },
//     elementS3:{
//         subjet :"",
//         verb :"",
//         complement : ""
//     },
//     elementS3:{
//         subjet :"",
//         verb :"",
//         complement : ""
//     }
// }

