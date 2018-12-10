//this config file will contain all the data that we need to configure our app
//such as the urls of the api server
class config  {
    
    static api_host = 'https://yoannabackend.herokuapp.com';
    static api_path = '/api';
    static Get_Adverts = config.api_host + config.api_path + '/GetAdverts';
    static Get_Login_Details = config.api_host + config.api_path + '/Login';
    static Post_Register = config.api_host + config.api_path + '/Register';
    static Get_Recipes_Managment = config.api_host + config.api_path + '/GetRecipesManagment';
    static Post_Update_Recipe_Status = config.api_host + config.api_path + '/UpdateRecipeStatus';
    static Post_Update_Recipe_Views = config.api_host + config.api_path + '/UpdateRecipeViews';
    static Get_Recipe = config.api_host + config.api_path + '/GetRecipe';
    static Get_New_Messages = config.api_host + config.api_path + '/New_Messages_Check';

    static Post_Upload_Images = config.api_host + config.api_path + '/Upload';

    static Get_Load_Chat_Items = config.api_host + config.api_path + '/LoadChatItems';
    static Get_Load_Messages = config.api_host + config.api_path + '/LoadMessages';
    static Post_Send_Msg = config.api_host + config.api_path + '/SendMsg';
    static Get_Check_Read = config.api_host + config.api_path + '/checkRead';
    static Post_Update_Status = config.api_host + config.api_path + '/UpdateStatus';
    static Post_Read_Message = config.api_host + config.api_path + '/ReadMsg';
    static Post_Update_Chat = config.api_host + config.api_path + '/UpdateChat';

    static Get_Rating = config.api_host + config.api_path + '/GetRating';
}


export default config;