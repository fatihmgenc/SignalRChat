using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatService.Hubs
{
    public class ChatHub : Hub
    {
        private readonly string _botUser;
        private readonly IDictionary<string,UserConnection> _connections;

        public ChatHub(IDictionary<string, UserConnection> connections)
        {
            _botUser = "MyChat Bot";
            _connections = connections;
        }

        public async Task JoinRoom(UserConnection userConnection) 
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);
            _connections[Context.ConnectionId] = userConnection;
            await Clients
                .Group(userConnection.Room)
                .SendAsync("RecieveMessage",_botUser,$"{userConnection.User} has joined {userConnection.Room}");
        }

        public async Task SendMessage(string message)
        {
            var user = _connections[Context.ConnectionId];
            await Clients.Group(user.Room).SendAsync("RecieveMessage", user.User, message);
        }


    }
}
