package com.springboot.applypage.data.dao;

import com.springboot.applypage.data.entity.BackendApplication;

public interface BackendApplicationDAO {

    BackendApplication insertBackendApplication(BackendApplication backendApplication);
    BackendApplication selectBackendApplication(String sid);
    BackendApplication updateBackendApplication(BackendApplication backendApplication) throws Exception;
    void deleteBackendApplication(String sid) throws Exception;
}