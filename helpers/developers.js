module.exports = {

    getDeveloperById: function (id){

        var developers = this.getAllDevelopers();

        var developersWithId = developers.filter(function(developer){

            return(developer.id === id);

        });

        var developer = developersWithId[0];

        if(developer === undefined){
            return{
                name: 'Nobody',
                favoriteLanguage: 'Nothing',
                gender: 'neither'
            };
        }else {
            return developer;
        }
    },
    getAllDevelopers: function (){

        return [
            {
                id: 'ryan',
                name: 'Ryan Haskell-Glatz',
                favoriteLanguage: 'Elm',
                image: 'https://onenorth.blob.core.windows.net/keystone/ryan2.png'
            },
            {
                id: 'erik',
                name: 'Erik Carron',
                favoriteLanguage: 'Elm',
                image: 'https://onenorth.blob.core.windows.net/keystone/Erik-Carron_BW_Cropped.jpg'
            },
            {
                id: 'emma',
                name: 'Emma Birdsong',
                favoriteLanguage: 'C#',
                image: 'https://onenorth.blob.core.windows.net/keystone/emma2.png'
            },
            {
                id: 'alex-hawley',
                name: 'Alex Hawley',
                favoriteLanguage: 'Elm',
                image: 'https://onenorth.blob.core.windows.net/keystone/Alex_Hawley.jpg'
            }
        ];
    }

};
