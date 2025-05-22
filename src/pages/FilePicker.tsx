import { Button } from "@/components/ui/button";

const DropboxChooser = () => {
  const openDropboxChooser = () => {
    const options = {
      success: function (files) {
        console.log("Selected files:", files);
      },
      cancel: function () {
        console.log("User closed the chooser");
      },
      linkType: "preview", // or "direct"
      multiselect: false, // or true
      extensions: [".pdf", ".doc", ".docx"], // optional
    };
    // console.log(Dropbox.isBrowserSupported());

    Dropbox?.choose(options);
  };

  return (
    <>
      <Button
        variant="outline"
        size={"lg"}
        color={"red"}
        onClick={openDropboxChooser}
      >
        Change
      </Button>
    </>
  );
};

export default DropboxChooser;
