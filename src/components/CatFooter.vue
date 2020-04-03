<template>
    <footer>
          <nav>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy and Terms</a></li>
              <li><a href="#">User Agreement</a></li>
            </ul>
          </nav>
    </footer>
</template>
 
<style lang="scss" scoped>
footer{
background:#3d453e;
padding:1em;
color:$theme_colour;
}
 
footer a {
text-decoration:none;
color: $theme_colour;
line-height: 1.7;
}
 
footer ul {
list-style-type:none;
padding:0;
margin:0; 
}
 
footer a:hover {
text-decoration:underline;
color:scale-color($theme_colour, $lightness: 30%);
}
</style>

