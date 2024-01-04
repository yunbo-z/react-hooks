import React from "react";

const React_useEffect = () => {
    return (
        <>
            <div>useEffect example</div>
            <div>useEffect Hook allows you to perform side effects in your components</div>
            <div>like: fetching data, directly updating the DOM, and timers</div>
            <div>useEffect accepts two arguments, the second argument is optional</div>
            <div>useEffect(&lt;function&gt;, &lt;dependency&gt;)</div>
            <div>The dependencied that we pass accepts an array</div>
            <div>EXANPLES</div>
            <ul>
                <li>
                    <div>useEffect(() =&gt; &#123;<br></br>
                        &#47;&#47;Runs on every render<br></br>
                        &#125;);</div>
                </li>
                <li>
                    useEffect(() =&gt; &#123;<br></br>
                    &#47;&#47;Runs only on the first render<br></br>
                    &#125;, []);
                </li>
                <li>
                useEffect(() =&gt; &#123;<br></br>
                &#47;&#47;Runs on the first render<br></br>
                &#47;&#47;And any time any dependency value changes<br></br>
                &#125;, [prop, state]);
                </li>
            </ul>

        </>

    )
}
export default React_useEffect