import React from "react";
import { useTranslation } from "react-i18next";
import { Space, Switch } from "antd";

const TranslateButton: React.FC = () => {
  const { i18n } = useTranslation();

  const handleTranslate = () => {
    const currentLang = i18n.language;
    i18n.changeLanguage(currentLang === "pt" ? "en" : "pt");
  };

  return (
    <Space direction="vertical">
      <Switch
        onClick={handleTranslate}
        checkedChildren="PT"
        unCheckedChildren="ENG"
        defaultChecked
      />
    </Space>
  );
};

export default TranslateButton;
