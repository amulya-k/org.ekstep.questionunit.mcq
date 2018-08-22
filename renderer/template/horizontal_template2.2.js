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
      <div class='mcq-option mcq-option1'>\
        <img class='option-image'\
        src=<%=MCQController.pluginInstance.getAssetUrl(question.data.options[0].image) %> />\
        <div class='check-image-holder' >\
          <img class='check-image'\
          src=<%=MCQController.pluginInstance.getAudioIcon('renderer/assets/check.png') %> />\
        </div>\
      </div>\
      <div class='mcq-option mcq-option2'>\
      <img class='option-image'\
        src=<%=MCQController.pluginInstance.getAssetUrl(question.data.options[1].image) %> />\
        <div class='check-image-holder'>\
          <img class='check-image' src=<%=MCQController.pluginInstance.getAudioIcon\('renderer/assets/check.png') %> />\
        </div>\
      </div>\
        <div class='mcq-option mcq-option3'>\
        <img class='option-image'\
        src=<%=MCQController.pluginInstance.getAssetUrl(question.data.options[2].image) %> />\
          <div class='check-image-holder'>\
            <img class='check-image' src=<%=MCQController.pluginInstance.getAudioIcon\('renderer/assets/check.png') %> />\
          </div>\
        </div>\
        <div class='mcq-option mcq-option4'>\
        <img class='option-image'\
        src=<%=MCQController.pluginInstance.getAssetUrl(question.data.options[3].image) %> />\
              <div class='check-image-holder'>\
                <img class='check-image' src=<%=MCQController.pluginInstance.getAudioIcon\('renderer/assets/check.png') %> />\
              </div>\
";
};