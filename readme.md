Pattern 7 - 1 SASS
`base`: Hiểu là code CSS bạn sẽ viết mỗi lần start dự án mới
-reset.css,general.css,typography.css
`components`: button.scss , toggle.scss, dropdown.scss,cover.scss,...
`layout`: Thường xuất hiện nhiều lần trong 1 trang web như header , footer, topbar,sidebar,navigation,..
`pages`: các trang chính của web
VD: Page có 2 trang chính là Home và Trending -> Trong trang chính có các section con
.pages
..home(Folder)
...topic
...follow
...feature
..trending(Folder)
...podcast
...listen
`abstracts`: chứa các function CSS,variables,mixin
`themes`: dark_mod,....
`vendors`: chứa các thư viện bên ngoài

--> Trong file main `use` tất cả các file dùng chung cho cả trang web,
