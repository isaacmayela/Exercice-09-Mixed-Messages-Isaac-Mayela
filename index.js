function index_random(list){
    return Math.floor(Math.random() * list.length)
}

function mixed_message(){
    element1 = ["J'aime","Tu adores","Samar s'amuse à","Joseph a fini de"]
    element2 = ["nager", "parler à tes collègues","jouer à la console","préparer"]
    element3 = ["avec cette culotte bleu","comme d'habitude","chez moi",", c'est bien !"]


    let message = list1[index_random(list1)] + " " + list2[index_random(list2)]+ " " + list3[index_random(list3)]

    console.log(message);
}


mixed_message()
