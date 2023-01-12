package com.springboot.applypage.data.dao;

import com.springboot.applypage.data.entity.BackendApplication;
import com.springboot.applypage.data.entity.DesignApplication;

public interface DesignApplicationDAO {

    DesignApplication insertDesignApplication(DesignApplication designApplication);
    DesignApplication selectDesignApplication(String sid);
    DesignApplication updateDesignApplication(DesignApplication designApplication) throws Exception;
    void deleteDesignApplication(String sid) throws Exception;

}