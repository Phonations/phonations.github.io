# Taken from https://gist.github.com/joelverhagen/1805814 and adapted to Vimeo
class Vimeo < Liquid::Tag
  Syntax =  /^\s*([^\s]+)(?:\s+(\d+)\s+(\d+)\s*)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @id = $1

      if $2.nil? then
          @width = 560
          @height = 420
      else
          @width = $2.to_i
          @height = $3.to_i
      end
    else
      raise "No Vimeo ID provided in the \"vimeo\" tag"
    end
  end

  def render(context)
    "<iframe src=\"//player.vimeo.com/video/#{@id}\" width=\"#{@width}\" height=\"#{@height}\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
  end

  Liquid::Template.register_tag "vimeo", self
end
