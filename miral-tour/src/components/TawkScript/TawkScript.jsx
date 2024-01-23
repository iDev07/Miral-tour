// TawkToScript.js
const TawkToScript = () => (
  <>
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/65a9a7ce0ff6374032c20503/1hkfbf0g4';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
        `,
      }}
    />
  </>
);

export default TawkToScript;
