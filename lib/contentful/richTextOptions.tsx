import { BLOCKS, INLINES, Document, Node } from "@contentful/rich-text-types";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => <p className="mb-4">{children}</p>,
    [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => <h2 className="text-2xl font-bold">{children}</h2>,
    [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => <h3 className="text-xl font-semibold">{children}</h3>,
    [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => <ul className="list-disc pl-6">{children}</ul>,
    [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => <ol className="list-decimal pl-6">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => <li>{children}</li>,
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-[#5D8736] underline">
        {children}
      </a>
    ),
  },
};

export default richTextOptions;
