(function() {
  if (window.separator == null) {
    window.separator = {};
  }

  separator.App = (function() {
    function App() {
      this.paragraph = this.getParagrah();
    }

    App.prototype.init = function() {
      var par, text_data, txt;
      par = this.getParagrah();
      text_data = this.divide(par);
      txt = this.textify(text_data);
      return this.showText(txt);
    };

    App.prototype.divide = function(text) {
      var d, div, index, main_divisions, t0, t1, t2, t3, _fn, _i, _len;
      d = {};
      t0 = text.replace(/[\"”“]/g, "");
      t1 = t0.replace(/([\.\!\?])\s/g, "$1||");
      t2 = t1.replace(/([,;])\s/g, "$1^");
      t3 = t2.replace(/\s(and\s)/g, "#$1");
      t3 = t3.replace(/\^\#/g, "#");
      t3 = t3.replace(/#/g, "^");
      main_divisions = t3.split("||");
      _fn = function() {
        var i;
        i = index + 1;
        return d[i] = div.split("^");
      };
      for (index = _i = 0, _len = main_divisions.length; _i < _len; index = ++_i) {
        div = main_divisions[index];
        _fn();
      }
      return d;
    };

    App.prototype.textify = function(text_data) {
      var clause, k, s, v, _i, _len;
      s = "";
      for (k in text_data) {
        v = text_data[k];
        s += "<div class='sentence'>";
        s += "<label>" + k + "</label>";
        for (_i = 0, _len = v.length; _i < _len; _i++) {
          clause = v[_i];
          s += "<p>" + clause;
        }
        s += "</div>";
      }
      return s;
    };

    App.prototype.showText = function(text) {
      var $text;
      $text = $("#text").html(text);
      return $text.fadeIn(900);
    };

    App.prototype.getParagrah = function() {
      return "Now before the Feast of the Passover, when Jesus knew that his hour had come to depart out of this world to the Father, having loved his own who were in the world, he loved them to the end. During supper, when the devil had already put it into the heart of Judas Iscariot, Simon's son, to betray him, Jesus, knowing that the Father had given all things into his hands, and that he had come from God and was going back to God, rose from supper. He laid aside his outer garments, and taking a towel, tied it around his waist. Then he poured water into a basin and began to wash the disciples' feet and to wipe them with the towel that was wrapped around him. He came to Simon Peter, who said to him, “Lord, do you wash my feet?” Jesus answered him, “What I am doing you do not understand now, but afterward you will understand.” Peter said to him, “You shall never wash my feet.” Jesus answered him, “If I do not wash you, you have no share with me.” Simon Peter said to him, “Lord, not my feet only but also my hands and my head!” Jesus said to him, “The one who has bathed does not need to wash, except for his feet, but is completely clean. And you are clean, but not every one of you.” For he knew who was to betray him; that was why he said, “Not all of you are clean.”";
    };

    return App;

  })();

}).call(this);
