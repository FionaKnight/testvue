<template>
  <div>
    <HeroImage altText="Puddy cat" headerImage="catheader" />
    <main>
      <h2>Meow!!!!!</h2>
      <p>Cat ipsum dolor sit amet, pet me pet me pet me pet me, bite, scratch, why are you petting me so it's 3am, time to create some chaos murf pratt ungow ungow or lies down . Stare at wall turn and meow stare at wall some more meow again continue staring stare at guinea pigs why must they do that, yet claw at curtains stretch and yawn nibble on tuna ignore human bite human hand paw at beetle and eat it before it gets away, instead of drinking water from the cat bowl, make sure to steal water from the toilet. Hunt anything that moves. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock.</p>
       <p>
        <router-link to="/mycats">See my cats (login required)</router-link>
      </p>
      <h2>Story of the cat</h2>
      <picture>
        <source
          media="(min-width: 800px)"
          srcset="img/appimages/catstand_1x.webp 1x, img/appimages/catstand.webp 2x"
          type="image/webp"
        />
        <source
          media="(min-width: 600px)"
          srcset="img/appimages/cat-sitting_1x.webp 1x, img/appimages/cat-sitting.webp 2x"
          type="image/webp"
        />
        <source
          media="(min-width: 450px)"
          srcset="img/appimages/Cat_Sleeping_1x.webp 1x, img/appimages/Cat_Sleeping.webp 2x"
          type="image/webp"
        />
        <source
          media="(min-width: 1px)"
          srcset="img/appimages/Cat-Face_1x.webp 1x, img/appimages/Cat-Face.webp 2x"
          type="image/webp"
        />
        <source
          media="(min-width: 800px)"
          srcset="img/appimages/catstand_1x.png 1x, img/appimages/catstand.png 2x"
        />
        <source
          media="(min-width: 600px)"
          srcset="img/appimages/cat-sitting_1x.png 1x, img/appimages/cat-sitting.png 2x"
        />
        <source
          media="(min-width: 450px)"
          srcset="img/appimages/Cat_Sleeping_1x.png 1x, img/appimages/Cat_Sleeping.png 2x"
        />
        <img
          src="img/appimages/Cat-Face.png"
          alt="Cat cartoon"
          srcset="img/appimages/Cat-Face_1x.png 1x, img/appimages/Cat-Face.png 2x"
          id="subImg"
        />
      </picture>

      <p>Head nudges scamper but spend all night ensuring people don't sleep sleep all day head nudges so play time. Playing with balls of wool have my breakfast spaghetti yarn pounce on unsuspecting person for chase laser dead stare with ears cocked i'm going to lap some water out of my master's cup meow i just saw other cats inside the house and nobody ask me before using my litter box. With tail in the air love to play with owner's hair tie sit on the laptop yet hide at bottom of staircase to trip human.</p>
      <p>Caticus cuteicus have my breakfast spaghetti yarn so with tail in the air yet where is my slave? I'm getting hungry. Pooping rainbow while flying in a toasted bread costume in space really likes hummus loves cheeseburgers but intently stare at the same spot, for love you, then bite you or the cat was chasing the mouse.</p>
      <p>Refuse to drink water except out of someone's glass jump off balcony, onto stranger's head for i cry and cry and cry unless you pet me, and then maybe i cry just for fun so jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed for ignore the squirrels, you'll never catch them anyway hide when guests come over. Stand in doorway, unwilling to chose whether to stay in or go out pelt around the house and up and down stairs chasing phantoms.</p>
      <p>Chase laser plop down in the middle where everybody walks have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat nya nya nyan. Eat grass, throw it back up kitty loves pigs yet get my claw stuck in the dog's ear. I am the best plays league of legends yet intently sniff hand get suspicious of own shadow then go play with toilette paper.</p>
      <p>Annoy kitten brother with poking spread kitty litter all over house. That box? i can fit in that box meow in empty rooms play riveting piece on synthesizer keyboard poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls. Jump around on couch, meow constantly until given food, pet me pet me pet me pet me, bite, scratch, why are you petting me yet step on your keyboard while you're gaming and then turn in a circle hate dog cough hairball on conveniently placed pants. Stare at ceiling light. Mice purr destroy house in 5 seconds.</p>
    </main>
  </div>
</template>

<style scoped>
a {
    display: block;
    margin-top: 1em;
    color: rgb(119, 58, 15);
  }

#subImg {
  width: 80%;
  min-width: 200px;
  max-width: 300px;
  height: auto;
  margin: 0 auto;
  display: block;
}

/* when the sub image changes at 600px */
@media only screen and (min-width: 600px) {
  #subImg {
    width: 300px;
    height: auto;
    float: left;
    shape-outside: url(/img/appimages/cat-sitting.png);
    shape-margin: 1.5em;
  }
}

/* Desktop sized screen */
@media only screen and (min-width: 800px) {
  #subImg {
    shape-outside: url(/img/appimages/catstand.png);
  }
}
</style>

<script>
import HeroImage from "@/components/HeroImage.vue";

export default {
  name: "Home",
  components: {
    HeroImage
  }
};
</script>


