window.separator ?= {}

class separator.App

	constructor: -> 
		@paragraph = @getParagrah()

	init: ->
		par = @getParagrah()
		text_data = @divide(par)
		txt = @textify(text_data)
		@showText(txt)

	divide:(text) ->
		d = {}

		t0 = text.replace(/[\"”“]/g, "") 			# remove quotes
		t1 = t0.replace(/([\.\!\?])\s/g, "$1||") 		# sentence breaks
		t2 = t1.replace(/([,;])\s/g, "$1^")			# clause breaks
		t3 = t2.replace(/\s(and\s)/g, "#$1") 		# "and" breaks
		t3 = t3.replace(/\^\#/g, "#")
		t3 = t3.replace(/#/g, "^")						

		main_divisions = t3.split("||")
		for div, index in main_divisions
			do ->	
				i = index+1		

				d[i] = div.split("^")

		d
	
	textify: (text_data) ->
		s = ""
		for k, v of text_data
			s+="<div class='sentence'>"
			s+="<label>#{k}</label>"
			for clause in v
				s+="<p>#{clause}"
			s+="</div>"
		s

	showText: (text) ->
		$text = $("#text").html(text)
		$text.fadeIn(900); 

	getParagrah: ->
		"""
		Now before the Feast of the Passover, when Jesus knew that his hour had come to depart out of this world to the Father, having loved his own who were in the world, he loved them to the end. During supper, when the devil had already put it into the heart of Judas Iscariot, Simon's son, to betray him, Jesus, knowing that the Father had given all things into his hands, and that he had come from God and was going back to God, rose from supper. He laid aside his outer garments, and taking a towel, tied it around his waist. Then he poured water into a basin and began to wash the disciples' feet and to wipe them with the towel that was wrapped around him. He came to Simon Peter, who said to him, “Lord, do you wash my feet?” Jesus answered him, “What I am doing you do not understand now, but afterward you will understand.” Peter said to him, “You shall never wash my feet.” Jesus answered him, “If I do not wash you, you have no share with me.” Simon Peter said to him, “Lord, not my feet only but also my hands and my head!” Jesus said to him, “The one who has bathed does not need to wash, except for his feet, but is completely clean. And you are clean, but not every one of you.” For he knew who was to betray him; that was why he said, “Not all of you are clean.”
		"""