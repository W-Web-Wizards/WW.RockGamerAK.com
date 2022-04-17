function search() {
    var serverId = document.getElementById("server-id").value;
    var channelId = document.getElementById("channel-id").value;
    var messageId = document.getElementById("message-id").value;
    window.location.href = `https://discord.com/channels/${serverId}/${channelId}/${messageId}`;
}