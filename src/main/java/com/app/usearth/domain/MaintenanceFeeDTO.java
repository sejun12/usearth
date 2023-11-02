package com.app.usearth.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class MaintenanceFeeDTO {
    private Long id;
    @JsonProperty("APARTMENT_ID")
    private Long apartmentId;
    @JsonProperty("APARTMENT_NAME")
    private String apartmentName;
    @JsonProperty("USER_ID")
    private Long userId;
    @JsonProperty("USER_DONG")
    private String userDong;
    @JsonProperty("USER_HO")
    private String userHo;
    @JsonProperty("GENERAL_FEE")
    private Long generalFee;
    @JsonProperty("CLEANING_FEE")
    private Long cleaningFee;
    @JsonProperty("ELEVATOR_FEE")
    private Long elevatorFee;
    @JsonProperty("REPAIR_FEE")
    private Long repairFee;
    @JsonProperty("LONG_TERM_REPAIR_FUND")
    private Long longTermRepairFund;
    @JsonProperty("SECURITY_FEE")
    private Long securityFee;
    @JsonProperty("MANAGEMENT_COMMISSION")
    private Long managementCommission;
    @JsonProperty("INSURANCE_FEE")
    private Long insuranceFee;
    @JsonProperty("MEETING_OPERATING_FEE")
    private Long meetingOperatingFee;
    @JsonProperty("NETWORK_FEE")
    private Long networkFee;
    @JsonProperty("UNIT_ELECTRICITY_FEE")
    private Long unitElectricityFee;
    @JsonProperty("COMMON_ELECTRICITY_FEE")
    private Long commonElectricityFee;
    @JsonProperty("TV_RECEPTION_FEE")
    private Long tvReceptionFee;
    @JsonProperty("UNIT_WATER_FEE")
    private Long unitWaterFee;
    @JsonProperty("COMMON_WATER_FEE")
    private Long commonWaterFee;
    @JsonProperty("UNIT_HEATING_FEE")
    private Long unitHeatingFee;
    @JsonProperty("BASE_HEATING_FEE")
    private Long baseHeatingFee;
    @JsonProperty("COMMON_HEATING_FEE")
    private Long commonHeatingFee;
    @JsonProperty("UNIT_HOT_WATER_FEE")
    private Long unitHotWaterFee;
    @JsonProperty("ELECTION_OPERATING_FEE")
    private Long electionOperatingFee;
    @JsonProperty("VEHICLE_REGISTRATION_FEE")
    private Long vehicleRegistrationFee;
    @JsonProperty("COMMUNITY_USAGE_FEE")
    private Long communityUsageFee;
    @JsonProperty("ON_TIME")
    private Long onTime;
    @JsonProperty("AFTER_DUE_DATE")
    private Long afterDueDate;
    @JsonProperty("ELECTRICITY_USAGE")
    private Long electricityUsage;
    @JsonProperty("HOT_WATER_USAGE")
    private Long hotWaterUsage;
    @JsonProperty("WATER_USAGE")
    private Long waterUsage;
    @JsonProperty("HEATING_USAGE")
    private Long heatingUsage;
    @JsonProperty("GAS_USAGE")
    private Long gasUsage;
    @JsonProperty("CURRENT_MONTH_FEE")
    private Long currentMonthFee;
    @JsonProperty("UNPAID_AMOUNT")
    private Long unpaidAmount;
    @JsonProperty("UNPAID_LATE_FEE")
    private Long unpaidLateFee;
    @JsonProperty("LATE_FEE_AFTER_DUE_DATE")
    private Long lateFeeAfterDueDate;
    @JsonProperty("FEE_IMPOSING_YEAR")
    private String feeImposingYear;
    @JsonProperty("FEE_IMPOSING_MONTH")
    private String feeImposingMonth;
    @JsonProperty("DUE_DATE")
    private String dueDate;
    private String feeRegisterDate;
    private String feeReleaseDate;
    private String feePublicStatus;

}
