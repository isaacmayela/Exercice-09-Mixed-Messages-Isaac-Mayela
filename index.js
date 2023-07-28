function index_random(list){
    return Math.floor(Math.random() * list.length)
}

function mixed_message(){
    list1 = ["J'aime","Tu adores","Samar s'amuse à","Joseph a fini de"]
    list2 = ["nager", "parler à tes collègues","jouer à la console","préparer"]
    list3 = ["avec cette culotte bleu","comme d'habitude","chez moi",", c'est bien !"]


    let message = list1[index_random(list1)] + " " + list2[index_random(list2)]+ " " + list3[index_random(list3)]

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

