// running http server
const http = require("http");
const hostname = '127.0.0.1';

const port = 4500;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut risus sagittis, auctor felis sit amet, vestibulum odio. Vestibulum luctus sagittis lectus quis venenatis. Suspendisse ultrices, diam ut rutrum vulputate, nulla lectus elementum erat, vitae elementum eros augue eget urna. Integer quis pellentesque sem. Etiam sed nibh et ante aliquet ultricies quis tempor mi. Nullam porta vitae justo posuere luctus. Fusce ornare dictum tortor, non facilisis felis ullamcorper id. Curabitur tempus, tortor sit amet porta tincidunt, ligula est sagittis elit, et posuere lectus massa sed est. Sed id orci magna. Maecenas quis pellentesque purus. Integer et nisi bibendum sem luctus laoreet vel id mi. Nam vel turpis leo. Phasellus massa sem, sagittis sed luctus vel, commodo et purus. Phasellus magna eros, sollicitudin nec cursus a, lacinia vel nisi. Quisque venenatis in sapien ut finibus. Maecenas nec tempus arcu.

Mauris porta ante nisi, quis euismod tellus pulvinar sed. Mauris non lectus id massa ultrices mattis at dictum purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non odio ac mi ultricies bibendum at vitae metus. Vivamus non congue turpis. Cras nec vestibulum arcu. Duis a tincidunt metus, sit amet viverra justo. Suspendisse pharetra libero vitae massa lacinia consequat vitae nec purus. Proin fringilla eleifend ex convallis lobortis. Nunc venenatis eu mauris in laoreet. Cras dapibus in sapien vitae pretium. Cras blandit sit amet magna consectetur porttitor. Aenean posuere diam eu tortor imperdiet vehicula. Curabitur semper, mauris nec condimentum aliquet, felis sapien cursus velit, in cursus nisl tortor vitae est. Pellentesque consequat vel nibh ac sagittis.

Phasellus ac rutrum diam, non dictum elit. Nulla molestie volutpat lorem id vulputate. Pellentesque magna nisl, commodo a faucibus eget, laoreet vel nunc. Nulla rutrum facilisis urna. Etiam hendrerit commodo nunc vel consectetur. Quisque eget arcu dui. Curabitur blandit massa mauris, sit amet consectetur nulla porttitor vel. Maecenas ornare, magna ac vestibulum pellentesque, ligula turpis malesuada tellus, eu auctor mi libero in nulla. Nulla consequat nunc eu tellus fringilla, a maximus libero feugiat. Vestibulum porta blandit hendrerit. Sed eget commodo dui. Morbi quis rutrum erat, ac laoreet risus. Cras tortor augue, vehicula suscipit euismod ut, ullamcorper eu velit. Morbi viverra aliquam ligula. Donec semper laoreet neque, non vestibulum felis molestie sed.

Ut tortor mi, auctor sed euismod vitae, blandit sed justo. Praesent eget lectus volutpat, vulputate orci quis, varius metus. Ut interdum nulla metus, non congue ante tincidunt vel. Curabitur viverra nisi scelerisque erat auctor blandit sit amet vel metus. Pellentesque fermentum auctor erat id viverra. Vestibulum interdum maximus nulla eget interdum. Etiam cursus risus sit amet odio tristique ornare vel eu urna. Suspendisse vulputate risus non mollis cursus. Ut leo libero, aliquet eget fermentum ac, molestie ut mi. Morbi viverra vulputate dictum. Pellentesque varius odio nec dignissim auctor.

Integer enim enim, ultrices eu eleifend sit amet, vulputate id diam. Duis porttitor orci eu sodales lobortis. Aliquam non purus sapien. Vestibulum scelerisque purus vitae magna dignissim luctus. Donec tristique dictum urna. Aenean vitae orci interdum nibh vulputate placerat. Maecenas auctor interdum sagittis.\n`);
}); 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})