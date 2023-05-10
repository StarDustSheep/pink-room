# pink-room theme inroduction
I found there is not any pink colour theme in SiYuan's bazaar, so I decide to make one for myself.<br>
The interface color of pink-room are mainly lightpink, white and beige.<br>
If you have any questions, you can email me directly or submit issue（Please give me feedback \_(ÒωÓ๑ゝ∠)\_）

Buy me a coffee:https://afdian.net/a/StarDustSheep <br>
[中文说明](https://github.com/StarDustSheep/pink-room/blob/main/README_zh_CN.md)
## Main Style feature
### Heading icon
Use easily identifiable icons to distinguish between multiple levels of headings to avoid identification difficulties<br>
![image](https://user-images.githubusercontent.com/114859111/232783230-f080b2b0-524c-4995-9792-ad19bfe979d1.png)

### Styled inline code, keystrokes, hyperlinks, block references
Made keystrokes and inline code more readable. Added end-of-line flags to hyperlinks and block references<br>The upward arrow represents travel to the outside world, i.e. the Internet/external links。<br>The reason for not putting icons in front of them is that too many icons tend to draw attention away from the eye and interfere with the reading of large passages of text.<br><br>
![image](https://user-images.githubusercontent.com/114859111/232783311-fb0e4780-37fe-49c1-953f-688b25f9c48d.png)

### Carded quote blocks
![image](https://user-images.githubusercontent.com/114859111/232783451-03143bbf-11c8-4a84-b607-d1ce8201d0ed.png)

### Superblock Card Style<br>

#### Top-level SuperBlock border
Add borders to Top-level SuperBlocks for partitioning of different topic content graphics<br><br>
![image](https://user-images.githubusercontent.com/114859111/232785401-c4080ae8-5289-43e2-95ce-402659d1fea9.png)
<br>
This feature is enabled by default, if you don't want it, please the theme with any text editor to find the theme folder in theme.css, comment out ```@import url("style/超级块边框.css");```<br><br>
#### Bottom-level Card Style
Add border and backgournd to the bottom-level SuperBlock to be used for different typographic needs. (Note: experimental feature, ordinary users should not try)
![image](https://user-images.githubusercontent.com/114859111/232785842-1a88b138-1c11-4113-91dc-09e8d6833a3a.png)

### Scroll-like content page<br>
Change the entire document editing area to a fixed width, with all content appearing to be on top of a vertical infinitely long scroll. Author's own use.<br>
**Note: Using this code may cause problems with images not being scaled properly using the drag slider, as well as other potential problems. Please do not use this feature code if you do not only use simple graphic and text layout and notes only for your own viewing use is enough**
![image](https://user-images.githubusercontent.com/114859111/232786106-65fe1633-e119-48f5-b201-195a362ddcad.png)
![image](https://user-images.githubusercontent.com/114859111/232786197-4b9ed36b-3493-4fff-8171-91236a89334a.png)


This feature is not turned on by default, if you want to turn it on, please download the theme and use any text editor to put ```@import url("style/卷轴页面.css");``` uncomment it **and turn on adaptive width in Siwon Notes** with any text editor in the theme folder themes.css.<br><br>

### Font Style Menu
The font style menu has been changed and numbers have been added to make it easier for people to find the style they need<br>
I did not make off-tone custom font and background color changes to Siyuan's default This is to prevent the user notes from looking too far away from the default theme to be usable. However, another standard custom word color and base color may be added in the future.<br><br>
![image](https://user-images.githubusercontent.com/114859111/232787307-8fd4e7bc-db5f-464b-8a51-ef6a08348043.png)

### Four color system font color
Author's own font style<br>
![image](https://user-images.githubusercontent.com/114859111/232787176-ac69f362-74d3-4deb-806f-7a542d913235.png)
This feature is not turned on by default, if you want to turn it on, please use any text editor to uncomment the ``@import url("style/4类主要自定义字色.css");`` in theme.css in the theme folder after downloading the theme.<br>
A four-color text background color has been added to this style.<br><br>

### Two other color schemes interface
If you need to open, please download the theme and use the button to switch directly in the upper right corner.（Thank to [Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi)）<br><br>
![Theme color switch display](https://user-images.githubusercontent.com/114859111/196854830-1762d995-3c57-48eb-9bb4-ff6b9bd66bdc.gif)

### Picture-border
![image](https://user-images.githubusercontent.com/114859111/196853759-aadbe55d-9a4c-406a-91ae-b342033d8764.png)<br>
Sometimes when you insert a white background image in a bright theme, you always feel that the color is vaguely different, but you can't see where the exact border is. At this time, click the block label of the block where the image is located to open the block properties panel and add the property. The property name is ```tpbk``` (the picture border key), the value is set to 1, you can make the picture have a border line.


# Update log
## Sorry, update log is only in Chinese for now, and the changelog after version 0.5.1 is available in realeases
