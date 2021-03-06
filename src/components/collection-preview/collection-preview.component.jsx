import React from "react";
// components
import CollectionItem from '../collection-item/collection-item.component'
// styles
import {
    CollectionPreviewContainer,
    PreviewContainer,
    TitleContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {items.filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;