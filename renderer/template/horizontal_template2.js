var MCQController = MCQController || {};
MCQController.getHorizontalTemplate = function () {
  return "<div class='mcq-container'>\
            <div class='mcq-content-container'>\
              <div class='mcq-question-container'>\
                <div class='mcq-question-image'>\
                <img class='q-image' onclick='MCQController.showImageModel(event)'\ src=<%=MCQController.pluginInstance.getAssetUrl( question.data.question.image) %> />\
                </div>\
                <div class='mcq-question-text'>\
                  <div class='mcq-text-content'>\
                  <span style='display:table-cell; vertical-align:middle;'><%= question.data.question.text %></span>\
                  </div>\
                </div>\
                <% if ( question.data.question.audio.length > 0 ){ %> \
                <img class='audio-image' src=<%=MCQController.pluginInstance.getDefaultAsset(MCQController.pluginInstance._defaultAudioIcon)%>\ onclick=MCQController.pluginInstance.playAudio('<%= question.data.question.audio %>') />\
                <% } %> \
              </div>\
              <div class='options-container'>\
                <div class='text-option text-option-1'>\
                  <div class='audio-option-image-container'>\
                    <% if ( question.data.options[0].audio.length > 0 ){ %> \
                    <img class='audio-option-image'    src=<%=MCQController.pluginInstance.getDefaultAsset(MCQController.pluginInstance._defaultAudioIcon)%> onclick=MCQController.pluginInstance.playAudio('<%= question.data.options[0].audio %>') />\
                    <% } %> \
                  </div>\
                  <div class='text-content'>\
                    <%= question.data.options[0].text %>\
                  </div>\
                  <div class='tick-icon-holder'>\
                    <img src=<%=MCQController.pluginInstance.getAudioIcon('renderer/assets/check.png') %> style='height: 100%;'>\
                  </div>\
                </div>\
                <div class='text-option text-option-2'>\
                  <div class='audio-option-image-container'>\
                    <% if ( question.data.options[1].audio.length > 0 ){ %> \
                    <img class='audio-option-image' src=<%=MCQController.pluginInstance.getDefaultAsset(MCQController.pluginInstance._defaultAudioIcon)%> />\
                    <% } %> \
                  </div>\
                  <div class='text-content'>\
                    <%= question.data.options[1].text %>\
                  </div>\
                  <div class='tick-icon-holder'>\
                    <img src=<%=MCQController.pluginInstance.getAudioIcon('renderer/assets/check.png') %> style='height: 100%;'>\
                  </div>\
                </div>\
                <div class='text-option text-option-2'>\
                  <div class='audio-option-image-container'>\
                    <% if ( question.data.options[2].audio.length > 0 ){ %> \
                    <img class='audio-option-image' src=<%=MCQController.pluginInstance.getDefaultAsset(MCQController.pluginInstance._defaultAudioIcon)%> />\
                    <% } %> \
                  </div>\
                  <div class='text-content'>\
                    <%= question.data.options[2].text %>\
                  </div>\
                  <div class='tick-icon-holder'>\
                    <img src=<%=MCQController.pluginInstance.getAudioIcon('renderer/assets/check.png') %> style='height: 100%;'>\
                  </div>\
                </div>\
                <div class='text-option text-option-2'>\
                  <div class='audio-option-image-container'>\
                    <% if ( question.data.options[3].audio.length > 0 ){ %> \
                    <img class='audio-option-image' src=<%=MCQController.pluginInstance.getDefaultAsset(MCQController.pluginInstance._defaultAudioIcon)%> />\
                    <% } %> \
                  </div>\
                  <div class='text-content'>\
                    <%= question.data.options[3].text %>\
                  </div>\
                  <div class='tick-icon-holder'>\
                    <img src=<%=MCQController.pluginInstance.getAudioIcon('renderer/assets/check.png') %> style='height: 100%;'>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>\
";
};