 // Grab and compile the template.
      var scene = document.querySelector('a-scene');
      var treeTemplateStr = document.querySelector('#forest-template').innerHTML;
      var treeTemplate = Handlebars.compile(treeTemplateStr);

      // Use the template 100 times in a loop.
      for (var x = 0; x < 100; x += 10) {
        for (var z = 0; z < 100; z += 10) {
          // Render the tree template into the scene, passing in the position.
          fuzz = Math.floor((Math.random() * 10) + 1);
          rockfuzz = Math.floor((Math.random() * 10) + 1);
          smallrockfuzz = Math.floor((Math.random() * 10) + 1);
          branchangle = Math.floor((Math.random() * 180) + 1);
          branchangle2 = Math.floor((Math.random() * 180) + 1);
          branchheight = Math.floor((Math.random() * 1.8) + 0);
          branchheight2 = Math.floor((Math.random() * 1.8) + 0);
          treerotate = Math.floor((Math.random() * 180) + 1);

          fuzzx = fuzz + x + 0.1;
          fuzzz = fuzz + z + 0.15;

          rockfuzzx = rockfuzz + x + 0.1;
          rockfuzzz = rockfuzz + z + 0.7;

          smallrockfuzzx = smallrockfuzz + x + 0.25;
          smallrockfuzzz = smallrockfuzz + z + 0.3;
            
            

          var treeEntityStr = treeTemplate({
            trunkColor: '#623B1C',
            treeposition: fuzzx + ' -1 ' + fuzzz,
            rockposition: rockfuzzx + ' -3 ' + rockfuzzz,
            smallrockposition: smallrockfuzzx + ' -3 ' + smallrockfuzzz,
            branchrotation:  branchangle,
            branchrotation2:  branchangle2,
            branchheight: branchheight,
            branchheight2: branchheight2,
            treerotation: treerotate  
          });

          scene.insertAdjacentHTML('beforeend', treeEntityStr);
        }
      }
      // Insert the treasure into the treasure template.
      var treasureTemplateStr = document.querySelector('#treasure-template').innerHTML;
      var treasureTemplate = Handlebars.compile(treasureTemplateStr);
      treasurex = Math.floor((Math.random() * 100) + 1);
      treasurez = Math.floor((Math.random() * 100) + 1);

      var treasureEntityStr = treasureTemplate({
        treasureColor: '#623B1C',
        treasureposition: treasurex + ' 0 ' + treasurez
      });

      scene.insertAdjacentHTML('beforeend', treasureEntityStr);