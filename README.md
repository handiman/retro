<style>
    .logged-in .live, 
    .env-production .live, 
    .page-responsive .live, 
    .colorblind-themes-v1 .live {
        display: none;
    }
</style>

# Don't you miss how the web looked back in the day?

---

| The |      | tables |
| --- | ---- | ------ |
| I   | like | coffee |
| I   | like | tea    |

## And forms

<form>
    <input type="text"><br />
    <textarea></textarea><br />
    <input type="radio" name="radio" value="1"><br />
    <input type="radio" name="radio" value="2"><br />
    <input type="checkbox" value="1"><br />
    <input type="submit"><br />
</form>

<style>
    .logged-in .live, 
    .env-production .live, 
    .page-responsive .live, 
    .colorblind-themes-v1 .live {
        display: none;
    }
</style>

<div class="live">
    ## The rainbow text
    <retro-rainbow>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </retro-rainbow>

    ## Why not blinking rainbow text while we're at it?
    <retro-blink>
        <retro-rainbow>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </retro-rainbow>
    </retro-blink>

    ## And... drumroll..
    <h3>
    <retro-blink>
        <retro-marquee>
            <retro-rainbow>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </retro-rainbow>
        </retro-marquee>
    </retro-blink>
    </h3>

    <h3>Colored lines :)</h3>
    <retro-hr color="#FFFF00"></retro-hr>

</div>

<script src="{{ '/retro.js' | absolute_url }}"></script>
